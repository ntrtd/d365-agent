/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BillingClassificationCodes } from './BillingClassificationCodes';
import { BillingClassificationCodesRequestBuilder } from './BillingClassificationCodesRequestBuilder';
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
export class BillingClassificationCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BillingClassificationCodes<DeSerializersT>, DeSerializersT>
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
  ): BillingClassificationCodesApi<DeSerializersT> {
    return new BillingClassificationCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BillingClassificationCodes;

  requestBuilder(): BillingClassificationCodesRequestBuilder<DeSerializersT> {
    return new BillingClassificationCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BillingClassificationCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BillingClassificationCodes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BillingClassificationCodes<DeSerializersT>,
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
    typeof BillingClassificationCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BillingClassificationCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BillingClassificationCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_CODE: OrderableEdmTypeField<
      BillingClassificationCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_CLASSIFICATION: OrderableEdmTypeField<
      BillingClassificationCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BillingClassificationCodes<DeSerializers>>;
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
         * Static representation of the {@link billingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_CODE: fieldBuilder.buildEdmTypeField(
          'BillingCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link billingClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'BillingClassification',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BillingClassificationCodes)
      };
    }

    return this._schema;
  }
}
