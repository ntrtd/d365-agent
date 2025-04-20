/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailReceiptMasks } from './RetailReceiptMasks';
import { RetailReceiptMasksRequestBuilder } from './RetailReceiptMasksRequestBuilder';
import { RetailReceiptTransaction } from './RetailReceiptTransaction';
import { NoYes } from './NoYes';
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
export class RetailReceiptMasksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailReceiptMasks<DeSerializersT>, DeSerializersT>
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
  ): RetailReceiptMasksApi<DeSerializersT> {
    return new RetailReceiptMasksApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailReceiptMasks;

  requestBuilder(): RetailReceiptMasksRequestBuilder<DeSerializersT> {
    return new RetailReceiptMasksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailReceiptMasks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailReceiptMasks<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailReceiptMasks<DeSerializersT>,
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
    typeof RetailReceiptMasks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailReceiptMasks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FUNCTIONALITY_PROFILE_ID: OrderableEdmTypeField<
      RetailReceiptMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECEIPT_TRANSACTION_TYPE: EnumField<
      RetailReceiptMasks<DeSerializers>,
      DeSerializersT,
      RetailReceiptTransaction,
      true,
      true
    >;
    IS_INDEPENDENT: EnumField<
      RetailReceiptMasks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MASK: OrderableEdmTypeField<
      RetailReceiptMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailReceiptMasks<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link functionalityProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONALITY_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalityProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link receiptTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'ReceiptTransactionType',
          RetailReceiptTransaction,
          true
        ),
        /**
         * Static representation of the {@link isIndependent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INDEPENDENT: fieldBuilder.buildEnumField(
          'IsIndependent',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MASK: fieldBuilder.buildEdmTypeField('Mask', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailReceiptMasks)
      };
    }

    return this._schema;
  }
}
