/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DualWriteTransactionMarkers } from './DualWriteTransactionMarkers';
import { DualWriteTransactionMarkersRequestBuilder } from './DualWriteTransactionMarkersRequestBuilder';
import { DualWriteTransactionStatus } from './DualWriteTransactionStatus';
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
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class DualWriteTransactionMarkersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DualWriteTransactionMarkers<DeSerializersT>, DeSerializersT>
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
  ): DualWriteTransactionMarkersApi<DeSerializersT> {
    return new DualWriteTransactionMarkersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DualWriteTransactionMarkers;

  requestBuilder(): DualWriteTransactionMarkersRequestBuilder<DeSerializersT> {
    return new DualWriteTransactionMarkersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DualWriteTransactionMarkers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DualWriteTransactionMarkers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DualWriteTransactionMarkers<DeSerializersT>,
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
    typeof DualWriteTransactionMarkers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DualWriteTransactionMarkers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TRANSACTION_ID: OrderableEdmTypeField<
      DualWriteTransactionMarkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_CREATED_DATE_TIME: OrderableEdmTypeField<
      DualWriteTransactionMarkers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FN_O_TRANSACTION_STATUS: EnumField<
      DualWriteTransactionMarkers<DeSerializers>,
      DeSerializersT,
      DualWriteTransactionStatus,
      true,
      true
    >;
    FN_O_TRANSACTION_ID_REFERENCE: OrderableEdmTypeField<
      DualWriteTransactionMarkers<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<DualWriteTransactionMarkers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link transactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'TransactionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'TransactionCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link fnOTransactionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FN_O_TRANSACTION_STATUS: fieldBuilder.buildEnumField(
          'FnOTransactionStatus',
          DualWriteTransactionStatus,
          true
        ),
        /**
         * Static representation of the {@link fnOTransactionIdReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FN_O_TRANSACTION_ID_REFERENCE: fieldBuilder.buildEdmTypeField(
          'FnOTransactionIdReference',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DualWriteTransactionMarkers)
      };
    }

    return this._schema;
  }
}
