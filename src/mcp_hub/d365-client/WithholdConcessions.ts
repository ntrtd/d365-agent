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
import type { WithholdConcessionsApi } from './WithholdConcessionsApi';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';

/**
 * This class represents the entity "WithholdConcessions" of service "d365_metadata".
 */
export class WithholdConcessions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WithholdConcessionsType<T>
{
  /**
   * Technical entity name for WithholdConcessions.
   */
  static override _entityName = 'WithholdConcessions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdConcessions entity.
   */
  static _keys = ['LineID', 'HeaderId'];
  /**
   * Line Id.
   */
  declare lineId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Header Id.
   */
  declare headerId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Vend Account.
   * @nullable
   */
  declare vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Certificate To Date.
   */
  declare certificateToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Remark.
   * @nullable
   */
  declare remark?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxWithholdTypeIn | null;
  /**
   * Certificate From Date.
   */
  declare certificateFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Withholding Tax Code.
   * @nullable
   */
  declare withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust Account.
   * @nullable
   */
  declare custAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Section Code.
   * @nullable
   */
  declare sectionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Certificate.
   * @nullable
   */
  declare certificate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: WithholdConcessionsApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdConcessionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  lineId: DeserializedType<T, 'Edm.Guid'>;
  headerId: DeserializedType<T, 'Edm.Guid'>;
  vendAccount?: DeserializedType<T, 'Edm.String'> | null;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  certificateToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  remark?: DeserializedType<T, 'Edm.String'> | null;
  taxType?: TaxWithholdTypeIn | null;
  certificateFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  custAccount?: DeserializedType<T, 'Edm.String'> | null;
  sectionCode?: DeserializedType<T, 'Edm.String'> | null;
  certificate?: DeserializedType<T, 'Edm.String'> | null;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
