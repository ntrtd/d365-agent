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
import type { ServiceAgreementHeadersApi } from './ServiceAgreementHeadersApi';
import { NoYes } from './NoYes';
import { SmaGroupServiceOrder } from './SmaGroupServiceOrder';
import { Workers, WorkersType } from './Workers';
import { Projects, ProjectsType } from './Projects';
import { ContactPersons, ContactPersonsType } from './ContactPersons';
import {
  ServiceLevelAgreements,
  ServiceLevelAgreementsType
} from './ServiceLevelAgreements';
import {
  ServiceOrderHeaders,
  ServiceOrderHeadersType
} from './ServiceOrderHeaders';
import {
  ServiceAgreementLines,
  ServiceAgreementLinesType
} from './ServiceAgreementLines';
import { ServiceOrderLines, ServiceOrderLinesType } from './ServiceOrderLines';

/**
 * This class represents the entity "ServiceAgreementHeaders" of service "d365_metadata".
 */
export class ServiceAgreementHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceAgreementHeadersType<T>
{
  /**
   * Technical entity name for ServiceAgreementHeaders.
   */
  static override _entityName = 'ServiceAgreementHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ServiceAgreementHeaders entity.
   */
  static _keys = ['dataAreaId', 'ServiceAgreementId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Agreement Id.
   */
  declare serviceAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Agreement Description.
   * @nullable
   */
  declare serviceAgreementDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Preferred Technician Personnel Number.
   * @nullable
   */
  declare preferredTechnicianPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Service Agreement Template Group Id.
   * @nullable
   */
  declare serviceAgreementTemplateGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Service Agreement Start Date.
   */
  declare serviceAgreementStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Service Level Agreement Id.
   * @nullable
   */
  declare serviceLevelAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Line Activity Type Id.
   * @nullable
   */
  declare defaultLineActivityTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Customer Account Number.
   * @nullable
   */
  declare projectCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Service Agreement End Date.
   */
  declare serviceAgreementEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Service Agreement Group Id.
   * @nullable
   */
  declare serviceAgreementGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Agreement Suspended.
   * @nullable
   */
  declare isAgreementSuspended?: NoYes | null;
  /**
   * Service Responsible Personnel Number.
   * @nullable
   */
  declare serviceResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Combine Service Order Method.
   * @nullable
   */
  declare combineServiceOrderMethod?: SmaGroupServiceOrder | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare preferredTechnicianWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link ContactPersons} entity.
   */
  declare contactPerson?: ContactPersons<T> | null;
  /**
   * One-to-one navigation property to the {@link ServiceLevelAgreements} entity.
   */
  declare serviceLevelAgreement?: ServiceLevelAgreements<T> | null;
  /**
   * One-to-many navigation property to the {@link ServiceOrderHeaders} entity.
   */
  declare serviceOrderHeaders: ServiceOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceAgreementLines} entity.
   */
  declare serviceAgreementLines: ServiceAgreementLines<T>[];
  /**
   * One-to-many navigation property to the {@link ServiceOrderLines} entity.
   */
  declare serviceOrderLines: ServiceOrderLines<T>[];

  constructor(_entityApi: ServiceAgreementHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceAgreementHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  serviceAgreementId: DeserializedType<T, 'Edm.String'>;
  serviceAgreementDescription?: DeserializedType<T, 'Edm.String'> | null;
  preferredTechnicianPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  serviceAgreementTemplateGroupId?: DeserializedType<T, 'Edm.String'> | null;
  serviceAgreementStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  serviceLevelAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  defaultLineActivityTypeId?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  projectCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  serviceAgreementEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  serviceAgreementGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isAgreementSuspended?: NoYes | null;
  serviceResponsiblePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  combineServiceOrderMethod?: SmaGroupServiceOrder | null;
  preferredTechnicianWorker?: WorkersType<T> | null;
  project?: ProjectsType<T> | null;
  contactPerson?: ContactPersonsType<T> | null;
  serviceLevelAgreement?: ServiceLevelAgreementsType<T> | null;
  serviceOrderHeaders: ServiceOrderHeadersType<T>[];
  serviceAgreementLines: ServiceAgreementLinesType<T>[];
  serviceOrderLines: ServiceOrderLinesType<T>[];
}
