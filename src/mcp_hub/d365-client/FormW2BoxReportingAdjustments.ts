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
import type { FormW2BoxReportingAdjustmentsApi } from './FormW2BoxReportingAdjustmentsApi';
import { PayrollW2BoxNumber } from './PayrollW2BoxNumber';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "FormW2BoxReportingAdjustments" of service "d365_metadata".
 */
export class FormW2BoxReportingAdjustments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FormW2BoxReportingAdjustmentsType<T>
{
  /**
   * Technical entity name for FormW2BoxReportingAdjustments.
   */
  static override _entityName = 'FormW2BoxReportingAdjustments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FormW2BoxReportingAdjustments entity.
   */
  static _keys = [
    'dataAreaId',
    'PersonnelNumber',
    'W2BoxNumber',
    'ReportingDate'
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
   * W 2 Box Number.
   * @nullable
   */
  declare w2BoxNumber?: PayrollW2BoxNumber | null;
  /**
   * Reporting Date.
   */
  declare reportingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * W 2 Box Label.
   * @nullable
   */
  declare w2BoxLabel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: FormW2BoxReportingAdjustmentsApi<T>) {
    super(_entityApi);
  }
}

export interface FormW2BoxReportingAdjustmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  w2BoxNumber?: PayrollW2BoxNumber | null;
  reportingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  w2BoxLabel?: DeserializedType<T, 'Edm.String'> | null;
  worker?: WorkersType<T> | null;
}
