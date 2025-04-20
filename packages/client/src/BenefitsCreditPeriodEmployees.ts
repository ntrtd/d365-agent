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
import type { BenefitsCreditPeriodEmployeesApi } from './BenefitsCreditPeriodEmployeesApi';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "BenefitsCreditPeriodEmployees" of service "d365_metadata".
 */
export class BenefitsCreditPeriodEmployees<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsCreditPeriodEmployeesType<T>
{
  /**
   * Technical entity name for BenefitsCreditPeriodEmployees.
   */
  static override _entityName = 'BenefitsCreditPeriodEmployees';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsCreditPeriodEmployees entity.
   */
  static _keys = [
    'dataAreaId',
    'PersonnelNumber',
    'Period_FK_PlanPeriodId',
    'LegalEntityId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Fk Plan Period Id.
   */
  declare periodFkPlanPeriodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plan Period Id.
   * @nullable
   */
  declare planPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Id.
   * @nullable
   */
  declare creditId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Period Employee Value.
   */
  declare creditPeriodEmployeeValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: BenefitsCreditPeriodEmployeesApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsCreditPeriodEmployeesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  periodFkPlanPeriodId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  planPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  creditId?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  creditPeriodEmployeeValue: DeserializedType<T, 'Edm.Decimal'>;
  worker?: WorkersType<T> | null;
}
