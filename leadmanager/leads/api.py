from leads.models import Lead
from rest_framework import viewsets , permissions
from .serializers import LeadSerializers



class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = LeadSerializers    
    def get_queryset(self) :
         return self.request.user.leads.all()
    def perform_create(self,serializer) :
        serializer.save(owner = self.request.user)



#without authentication
#class LeadViewSet(viewsets.ModelViewSet):
    #queryset = Leads.objects.all()
    # permission_classes = [
    #     permissions.AllowAny
    # ]   
    # serializer_class = LeadSerializers    
