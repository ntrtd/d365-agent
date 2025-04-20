/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorPaymentFineCodes } from './VendorPaymentFineCodes';
import { VendorPaymentFineCodesRequestBuilder } from './VendorPaymentFineCodesRequestBuilder';
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
export class VendorPaymentFineCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendorPaymentFineCodes<DeSerializersT>, DeSerializersT>
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
  ): VendorPaymentFineCodesApi<DeSerializersT> {
    return new VendorPaymentFineCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendorPaymentFineCodes;

  requestBuilder(): VendorPaymentFineCodesRequestBuilder<DeSerializersT> {
    return new VendorPaymentFineCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorPaymentFineCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorPaymentFineCodes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorPaymentFineCodes<DeSerializersT>,
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
    typeof VendorPaymentFineCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorPaymentFineCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorPaymentFineCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FINE_CODE: OrderableEdmTypeField<
      VendorPaymentFineCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DAYS: OrderableEdmTypeField<
      VendorPaymentFineCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VendorPaymentFineCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINE_PERCENTAGE: OrderableEdmTypeField<
      VendorPaymentFineCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<VendorPaymentFineCodes<DeSerializers>>;
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
         * Static representation of the {@link fineCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINE_CODE: fieldBuilder.buildEdmTypeField(
          'FineCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link days} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS: fieldBuilder.buildEdmTypeField('Days', 'Edm.Int32', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link finePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'FinePercentage',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorPaymentFineCodes)
      };
    }

    return this._schema;
  }
}
