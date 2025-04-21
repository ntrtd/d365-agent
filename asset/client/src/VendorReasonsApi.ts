/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorReasons } from './VendorReasons';
import { VendorReasonsRequestBuilder } from './VendorReasonsRequestBuilder';
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
export class VendorReasonsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendorReasons<DeSerializersT>, DeSerializersT>
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
  ): VendorReasonsApi<DeSerializersT> {
    return new VendorReasonsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendorReasons;

  requestBuilder(): VendorReasonsRequestBuilder<DeSerializersT> {
    return new VendorReasonsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorReasons<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendorReasons<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<VendorReasons<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof VendorReasons, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(VendorReasons, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REASON_CODE: OrderableEdmTypeField<
      VendorReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURPOSE_CODE: EnumField<
      VendorReasons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FOR_VENDOR_TRANSACTION_TYPE: EnumField<
      VendorReasons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_COMMENT: OrderableEdmTypeField<
      VendorReasons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CANCELLATION_REASON: EnumField<
      VendorReasons<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendorReasons<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link reasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE: fieldBuilder.buildEdmTypeField(
          'ReasonCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purposeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE_CODE: fieldBuilder.buildEnumField('PurposeCode', NoYes, true),
        /**
         * Static representation of the {@link forVendorTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOR_VENDOR_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'ForVendorTransactionType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_COMMENT: fieldBuilder.buildEdmTypeField(
          'DefaultComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cancellationReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLATION_REASON: fieldBuilder.buildEnumField(
          'CancellationReason',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorReasons)
      };
    }

    return this._schema;
  }
}
