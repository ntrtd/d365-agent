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
import type { SequenceV2TablesApi } from './SequenceV2TablesApi';
import { NumberSequenceType } from './NumberSequenceType';
import { NoYes } from './NoYes';
import { OmOperatingUnitType } from './OmOperatingUnitType';

/**
 * This class represents the entity "SequenceV2Tables" of service "d365_metadata".
 */
export class SequenceV2Tables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SequenceV2TablesType<T>
{
  /**
   * Technical entity name for SequenceV2Tables.
   */
  static override _entityName = 'SequenceV2Tables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SequenceV2Tables entity.
   */
  static _keys = ['NumberSequenceCode', 'ScopeType', 'ScopeValue'];
  /**
   * Number Sequence Code.
   */
  declare numberSequenceCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Scope Type.
   * @nullable
   */
  declare scopeType?: NumberSequenceType | null;
  /**
   * Scope Value.
   */
  declare scopeValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Next.
   */
  declare next: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Format.
   * @nullable
   */
  declare format?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preallocation.
   * @nullable
   */
  declare preallocation?: NoYes | null;
  /**
   * Manual.
   * @nullable
   */
  declare manual?: NoYes | null;
  /**
   * To A Lower Number.
   * @nullable
   */
  declare toALowerNumber?: NoYes | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Interval.
   */
  declare interval: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Annotated Format.
   * @nullable
   */
  declare annotatedFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Smallest.
   */
  declare smallest: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Clean Up.
   * @nullable
   */
  declare cleanUp?: NoYes | null;
  /**
   * Date Time.
   */
  declare dateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Quantity Of Numbers.
   */
  declare quantityOfNumbers: DeserializedType<T, 'Edm.Int32'>;
  /**
   * To A Higher Number.
   * @nullable
   */
  declare toAHigherNumber?: NoYes | null;
  /**
   * Cyclical.
   * @nullable
   */
  declare cyclical?: NoYes | null;
  /**
   * Operating Unit Types.
   * @nullable
   */
  declare operatingUnitTypes?: OmOperatingUnitType | null;
  /**
   * Largest.
   */
  declare largest: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Continuous.
   * @nullable
   */
  declare continuous?: NoYes | null;
  /**
   * Stopped.
   * @nullable
   */
  declare stopped?: NoYes | null;
  /**
   * In Use.
   * @nullable
   */
  declare inUse?: NoYes | null;
  /**
   * Skip Counting.
   * @nullable
   */
  declare skipCounting?: NoYes | null;

  constructor(_entityApi: SequenceV2TablesApi<T>) {
    super(_entityApi);
  }
}

export interface SequenceV2TablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  numberSequenceCode: DeserializedType<T, 'Edm.String'>;
  scopeType?: NumberSequenceType | null;
  scopeValue: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  next: DeserializedType<T, 'Edm.Int32'>;
  format?: DeserializedType<T, 'Edm.String'> | null;
  preallocation?: NoYes | null;
  manual?: NoYes | null;
  toALowerNumber?: NoYes | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  interval: DeserializedType<T, 'Edm.Decimal'>;
  annotatedFormat?: DeserializedType<T, 'Edm.String'> | null;
  smallest: DeserializedType<T, 'Edm.Int32'>;
  cleanUp?: NoYes | null;
  dateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  quantityOfNumbers: DeserializedType<T, 'Edm.Int32'>;
  toAHigherNumber?: NoYes | null;
  cyclical?: NoYes | null;
  operatingUnitTypes?: OmOperatingUnitType | null;
  largest: DeserializedType<T, 'Edm.Int32'>;
  continuous?: NoYes | null;
  stopped?: NoYes | null;
  inUse?: NoYes | null;
  skipCounting?: NoYes | null;
}
