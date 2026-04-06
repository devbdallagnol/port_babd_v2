import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { LucideAngularModule, Menu, X, Github, Linkedin, Download, ChevronDown, Briefcase, Calendar, ExternalLink, Code, Database, Mail, MapPin, Send } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(LucideAngularModule.pick({ 
      Menu, X, Github, Linkedin, Download, ChevronDown, Briefcase, Calendar, ExternalLink, Code, Database, Mail, MapPin, Send 
    }))
  ]
};