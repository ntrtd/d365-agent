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
import type { RegulatoryEstablishmentDetailsApi } from './RegulatoryEstablishmentDetailsApi';
import { NoYes } from './NoYes';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';
import {
  RegulatoryEstablishments,
  RegulatoryEstablishmentsType
} from './RegulatoryEstablishments';
import { EmploymentsV2, EmploymentsV2Type } from './EmploymentsV2';
import { Employments, EmploymentsType } from './Employments';
import {
  EmploymentsPerCompany,
  EmploymentsPerCompanyType
} from './EmploymentsPerCompany';

/**
 * This class represents the entity "RegulatoryEstablishmentDetails" of service "d365_metadata".
 */
export class RegulatoryEstablishmentDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RegulatoryEstablishmentDetailsType<T>
{
  /**
   * Technical entity name for RegulatoryEstablishmentDetails.
   */
  static override _entityName = 'RegulatoryEstablishmentDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RegulatoryEstablishmentDetails entity.
   */
  static _keys = ['RegulatoryEstablishmentId', 'LegalEntityId'];
  /**
   * Regulatory Establishment Id.
   */
  declare regulatoryEstablishmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Industry Description.
   * @nullable
   */
  declare industryDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Duns Number.
   * @nullable
   */
  declare dunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Headquarter.
   * @nullable
   */
  declare isHeadquarter?: NoYes | null;
  /**
   * Employer Identification Number.
   * @nullable
   */
  declare employerIdentificationNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Naics Code.
   * @nullable
   */
  declare naicsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Number.
   * @nullable
   */
  declare unitNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link RegulatoryEstablishments} entity.
   */
  declare regulatoryEstablishment?: RegulatoryEstablishments<T> | null;
  /**
   * One-to-one navigation property to the {@link EmploymentsV2} entity.
   */
  declare employmentV2?: EmploymentsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Employments} entity.
   */
  declare employment?: Employments<T> | null;
  /**
   * One-to-one navigation property to the {@link EmploymentsPerCompany} entity.
   */
  declare employmentPerCompany?: EmploymentsPerCompany<T> | null;

  constructor(_entityApi: RegulatoryEstablishmentDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface RegulatoryEstablishmentDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  regulatoryEstablishmentId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  industryDescription?: DeserializedType<T, 'Edm.String'> | null;
  dunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  isHeadquarter?: NoYes | null;
  employerIdentificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  naicsCode?: DeserializedType<T, 'Edm.String'> | null;
  unitNumber?: DeserializedType<T, 'Edm.String'> | null;
  legalEntity?: LegalEntitiesType<T> | null;
  regulatoryEstablishment?: RegulatoryEstablishmentsType<T> | null;
  employmentV2?: EmploymentsV2Type<T> | null;
  employment?: EmploymentsType<T> | null;
  employmentPerCompany?: EmploymentsPerCompanyType<T> | null;
}
