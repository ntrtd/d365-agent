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
import type { ServiceOrderHeadersApi } from './ServiceOrderHeadersApi';
import { SmaLogStatus } from './SmaLogStatus';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';
import { SmaServiceOrderProgress } from './SmaServiceOrderProgress';
import { SmaServiceOrderOrigin } from './SmaServiceOrderOrigin';
import { SmmActivityPriority } from './SmmActivityPriority';
import {
  ServiceAgreementHeaders,
  ServiceAgreementHeadersType
} from './ServiceAgreementHeaders';
import { ContactPersons, ContactPersonsType } from './ContactPersons';
import { Projects, ProjectsType } from './Projects';
import { Activities, ActivitiesType } from './Activities';
import { Workers, WorkersType } from './Workers';
import { CustomersV3, CustomersV3Type } from './CustomersV3';
import {
  ServiceLevelAgreements,
  ServiceLevelAgreementsType
} from './ServiceLevelAgreements';
import { ServiceOrderLines, ServiceOrderLinesType } from './ServiceOrderLines';

/**
 * This class represents the entity "ServiceOrderHeaders" of service "d365_metadata".
 */
export class ServiceOrderHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ServiceOrderHeadersType<T>
{
  /**
   * Technical entity name for ServiceOrderHeaders.
   */
  static override _entityName = 'ServiceOrderHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ServiceOrderHeaders entity.
   */
  static _keys = ['dataAreaId', 'ServiceOrderNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Order Number.
   */
  declare serviceOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Responsible Personnel Number.
   * @nullable
   */
  declare serviceResponsiblePersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Service Address Duns Number.
   * @nullable
   */
  declare serviceAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Address City.
   * @nullable
   */
  declare serviceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Recording Status.
   * @nullable
   */
  declare timeRecordingStatus?: SmaLogStatus | null;
  /**
   * Service Order Description.
   * @nullable
   */
  declare serviceOrderDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Address Longitude.
   */
  declare serviceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Service Order Sign Off Date Time.
   */
  declare serviceOrderSignOffDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Service Address Post Box.
   * @nullable
   */
  declare serviceAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Service Address Private.
   * @nullable
   */
  declare isServiceAddressPrivate?: NoYes | null;
  /**
   * Service Address District Name.
   * @nullable
   */
  declare serviceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preferred Service Date Time.
   */
  declare preferredServiceDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Service Address Street Number.
   * @nullable
   */
  declare serviceAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Address Description.
   * @nullable
   */
  declare serviceAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Customer Account Number.
   * @nullable
   */
  declare serviceCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Service Order Signed Off.
   * @nullable
   */
  declare isServiceOrderSignedOff?: NoYes | null;
  /**
   * Service Address Location Id.
   * @nullable
   */
  declare serviceAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Address Time Zone.
   * @nullable
   */
  declare serviceAddressTimeZone?: Timezone | null;
  /**
   * Service Address County Id.
   * @nullable
   */
  declare serviceAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Address Name.
   * @nullable
   */
  declare serviceAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Line Activity Type Id.
   * @nullable
   */
  declare defaultLineActivityTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Address Building Compliment.
   * @nullable
   */
  declare serviceAddressBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Service Order Progress.
   * @nullable
   */
  declare serviceOrderProgress?: SmaServiceOrderProgress | null;
  /**
   * Service Address Street.
   * @nullable
   */
  declare serviceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Order Origin.
   * @nullable
   */
  declare serviceOrderOrigin?: SmaServiceOrderOrigin | null;
  /**
   * Service Level Agreement Id.
   * @nullable
   */
  declare serviceLevelAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Activity Number.
   * @nullable
   */
  declare projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Level Agreement Compliance Percentage.
   */
  declare serviceLevelAgreementCompliancePercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Agreement Id.
   * @nullable
   */
  declare serviceAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Address State Id.
   * @nullable
   */
  declare serviceAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Order Stage Id.
   * @nullable
   */
  declare serviceOrderStageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Order Priority.
   * @nullable
   */
  declare serviceOrderPriority?: SmmActivityPriority | null;
  /**
   * Service Address Latitude.
   */
  declare serviceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Service Address Country Region Iso Code.
   * @nullable
   */
  declare serviceAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Service Address Order Specific.
   * @nullable
   */
  declare isServiceAddressOrderSpecific?: NoYes | null;
  /**
   * Service Address Zip Code.
   * @nullable
   */
  declare serviceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Has Calendar Conflict.
   * @nullable
   */
  declare hasCalendarConflict?: NoYes | null;
  /**
   * Service Address Country Region Id.
   * @nullable
   */
  declare serviceAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Service Address Street In Kana.
   * @nullable
   */
  declare serviceAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preferred Technician Personnel Number.
   * @nullable
   */
  declare preferredTechnicianPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Contact Person Id.
   * @nullable
   */
  declare contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Address City In Kana.
   * @nullable
   */
  declare serviceAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Service Address.
   * @nullable
   */
  declare formattedServiceAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ServiceAgreementHeaders} entity.
   */
  declare serviceAgreement?: ServiceAgreementHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link ContactPersons} entity.
   */
  declare contactPerson?: ContactPersons<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link Activities} entity.
   */
  declare projectActivity?: Activities<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare serviceResponsible?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare serviceCustomer?: CustomersV3<T> | null;
  /**
   * One-to-one navigation property to the {@link ServiceLevelAgreements} entity.
   */
  declare serviceLevelAgreement?: ServiceLevelAgreements<T> | null;
  /**
   * One-to-many navigation property to the {@link ServiceOrderLines} entity.
   */
  declare serviceOrderLines: ServiceOrderLines<T>[];

  constructor(_entityApi: ServiceOrderHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceOrderHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  serviceOrderNumber: DeserializedType<T, 'Edm.String'>;
  serviceResponsiblePersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  serviceAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  serviceAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  timeRecordingStatus?: SmaLogStatus | null;
  serviceOrderDescription?: DeserializedType<T, 'Edm.String'> | null;
  serviceAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  serviceOrderSignOffDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  serviceAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  isServiceAddressPrivate?: NoYes | null;
  serviceAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  preferredServiceDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  serviceAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  serviceAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  serviceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  isServiceOrderSignedOff?: NoYes | null;
  serviceAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  serviceAddressTimeZone?: Timezone | null;
  serviceAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  serviceAddressName?: DeserializedType<T, 'Edm.String'> | null;
  defaultLineActivityTypeId?: DeserializedType<T, 'Edm.String'> | null;
  serviceAddressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  serviceOrderProgress?: SmaServiceOrderProgress | null;
  serviceAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  serviceOrderOrigin?: SmaServiceOrderOrigin | null;
  serviceLevelAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  serviceLevelAgreementCompliancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  serviceAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  serviceAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  serviceOrderStageId?: DeserializedType<T, 'Edm.String'> | null;
  serviceOrderPriority?: SmmActivityPriority | null;
  serviceAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  serviceAddressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  isServiceAddressOrderSpecific?: NoYes | null;
  serviceAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  hasCalendarConflict?: NoYes | null;
  serviceAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  serviceAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  preferredTechnicianPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonId?: DeserializedType<T, 'Edm.String'> | null;
  serviceAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  formattedServiceAddress?: DeserializedType<T, 'Edm.String'> | null;
  serviceAgreement?: ServiceAgreementHeadersType<T> | null;
  contactPerson?: ContactPersonsType<T> | null;
  project?: ProjectsType<T> | null;
  projectActivity?: ActivitiesType<T> | null;
  serviceResponsible?: WorkersType<T> | null;
  serviceCustomer?: CustomersV3Type<T> | null;
  serviceLevelAgreement?: ServiceLevelAgreementsType<T> | null;
  serviceOrderLines: ServiceOrderLinesType<T>[];
}
