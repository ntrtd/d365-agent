/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { ServiceLevelAgreementsApi } from './ServiceLevelAgreementsApi';
import { NoYes } from './NoYes';
import { WorkCalendars, WorkCalendarsType } from './WorkCalendars';
import {
  CaseCategoryHierarchyDetails,
  CaseCategoryHierarchyDetailsType
} from './CaseCategoryHierarchyDetails';
import {
  ServiceAgreementHeaders,
  ServiceAgreementHeadersType
} from './ServiceAgreementHeaders';
import {
  ServiceOrderHeaders,
  ServiceOrderHeadersType
} from './ServiceOrderHeaders';

/**
 * This class represents the entity "ServiceLevelAgreements" of service "d365_metadata".
 */
export class ServiceLevelAgreements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceLevelAgreementsType<T>
{
  /**
   * Technical entity name for ServiceLevelAgreements.
   */
  static override _entityName = 'ServiceLevelAgreements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ServiceLevelAgreements entity.
   */
  static _keys = ['dataAreaId', 'AgreementId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Agreement Id.
   */
  declare agreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Request Response Hours.
   */
  declare serviceRequestResponseHours: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Service Request Response Days.
   */
  declare serviceRequestResponseDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Service Request Response Minutes.
   */
  declare serviceRequestResponseMinutes: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Agreement Description.
   * @nullable
   */
  declare agreementDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Agreement Suspended.
   * @nullable
   */
  declare isAgreementSuspended?: NoYes | null;
  /**
   * Agreement Work Calendar Id.
   * @nullable
   */
  declare agreementWorkCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link WorkCalendars} entity.
   */
  declare workCalendar?: WorkCalendars<T> | null;
  /**
   * One-to-many navigation property to the {@link CaseCategoryHierarchyDetails} entity.
   */
  declare caseCategoryHierarchyDetailServiceLevelAgreements: CaseCategoryHierarchyDetails<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceAgreementHeaders} entity.
   */
  declare serviceAgreementHeaders: ServiceAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderHeaders} entity.
   */
  declare serviceOrderHeaders: ServiceOrderHeaders<T>[];

  constructor(_entityApi: ServiceLevelAgreementsApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceLevelAgreementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  agreementId: DeserializedType<T, 'Edm.String'>;
  serviceRequestResponseHours: DeserializedType<T, 'Edm.Int32'>;
  serviceRequestResponseDays: DeserializedType<T, 'Edm.Int32'>;
  serviceRequestResponseMinutes: DeserializedType<T, 'Edm.Int32'>;
  agreementDescription?: DeserializedType<T, 'Edm.String'> | null;
  isAgreementSuspended?: NoYes | null;
  agreementWorkCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  workCalendar?: WorkCalendarsType<T> | null;
  caseCategoryHierarchyDetailServiceLevelAgreements: CaseCategoryHierarchyDetailsType<T>[];
  serviceAgreementHeaders: ServiceAgreementHeadersType<T>[];
  serviceOrderHeaders: ServiceOrderHeadersType<T>[];
}
