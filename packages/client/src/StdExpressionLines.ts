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
import type { StdExpressionLinesApi } from './StdExpressionLinesApi';
import { PeriodFrequencyRu } from './PeriodFrequencyRu';
import { RTax25StdLineType } from './RTax25StdLineType';
import { RTax25StdOperator } from './RTax25StdOperator';

/**
 * This class represents the entity "StdExpressionLines" of service "d365_metadata".
 */
export class StdExpressionLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements StdExpressionLinesType<T>
{
  /**
   * Technical entity name for StdExpressionLines.
   */
  static override _entityName = 'StdExpressionLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the StdExpressionLines entity.
   */
  static _keys = ['dataAreaId', 'Sequence', 'ProfitId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence.
   */
  declare sequence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Profit Id.
   */
  declare profitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Index.
   */
  declare index: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Register Field.
   * @nullable
   */
  declare registerField?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To.
   * @nullable
   */
  declare to?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Types.
   * @nullable
   */
  declare periodTypes?: PeriodFrequencyRu | null;
  /**
   * Note.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: RTax25StdLineType | null;
  /**
   * Operator.
   * @nullable
   */
  declare operator?: RTax25StdOperator | null;
  /**
   * Output.
   * @nullable
   */
  declare output?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From.
   * @nullable
   */
  declare from?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: StdExpressionLinesApi<T>) {
    super(_entityApi);
  }
}

export interface StdExpressionLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sequence: DeserializedType<T, 'Edm.Int32'>;
  profitId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Int32'>;
  index: DeserializedType<T, 'Edm.Int32'>;
  registerField?: DeserializedType<T, 'Edm.String'> | null;
  to?: DeserializedType<T, 'Edm.String'> | null;
  periodTypes?: PeriodFrequencyRu | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  lineType?: RTax25StdLineType | null;
  operator?: RTax25StdOperator | null;
  output?: DeserializedType<T, 'Edm.String'> | null;
  from?: DeserializedType<T, 'Edm.String'> | null;
}
