/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PredPredictionResults } from './PredPredictionResults';
import { PredPredictionResultsRequestBuilder } from './PredPredictionResultsRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class PredPredictionResultsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PredPredictionResults<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): PredPredictionResultsApi<DeSerializersT> {
    return new PredPredictionResultsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PredPredictionResults;

  requestBuilder(): PredPredictionResultsRequestBuilder<DeSerializersT> {
    return new PredPredictionResultsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PredPredictionResults<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PredPredictionResults<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PredPredictionResults<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof PredPredictionResults,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PredPredictionResults,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SOURCE_TABLE_ID: OrderableEdmTypeField<
      PredPredictionResults<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_REC_ID: OrderableEdmTypeField<
      PredPredictionResults<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MODEL_ID: OrderableEdmTypeField<
      PredPredictionResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_CUST_TRANS_REC_ID: OrderableEdmTypeField<
      PredPredictionResults<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      PredPredictionResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPLAINABILITY: OrderableEdmTypeField<
      PredPredictionResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCORED_DATE: OrderableEdmTypeField<
      PredPredictionResults<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LIKELIHOODS: OrderableEdmTypeField<
      PredPredictionResults<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PredPredictionResults<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sourceTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'SourceTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sourceRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_REC_ID: fieldBuilder.buildEdmTypeField(
          'SourceRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link modelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ModelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invoiceCustTransRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_CUST_TRANS_REC_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceCustTransRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link explainability} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPLAINABILITY: fieldBuilder.buildEdmTypeField(
          'Explainability',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scoredDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCORED_DATE: fieldBuilder.buildEdmTypeField(
          'ScoredDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link likelihoods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIKELIHOODS: fieldBuilder.buildEdmTypeField(
          'Likelihoods',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PredPredictionResults)
      };
    }

    return this._schema;
  }
}
