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
import type { RetailAssortmentsApi } from './RetailAssortmentsApi';
import { RetailAssortmentStatusType } from './RetailAssortmentStatusType';
import {
  RetailAssortmentChannelLines,
  RetailAssortmentChannelLinesType
} from './RetailAssortmentChannelLines';

/**
 * This class represents the entity "RetailAssortments" of service "d365_metadata".
 */
export class RetailAssortments<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailAssortmentsType<T>
{
  /**
   * Technical entity name for RetailAssortments.
   */
  static override _entityName = 'RetailAssortments';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailAssortments entity.
   */
  static _keys = ['AssortmentID'];
  /**
   * Assortment Id.
   */
  declare assortmentId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailAssortmentStatusType | null;
  /**
   * Published Date Time.
   */
  declare publishedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link RetailAssortmentChannelLines} entity.
   */
  declare retailAssortmentChannelLine: RetailAssortmentChannelLines<T>[];

  constructor(_entityApi: RetailAssortmentsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailAssortmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  assortmentId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  status?: RetailAssortmentStatusType | null;
  publishedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  retailAssortmentChannelLine: RetailAssortmentChannelLinesType<T>[];
}
