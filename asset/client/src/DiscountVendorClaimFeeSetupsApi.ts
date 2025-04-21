/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscountVendorClaimFeeSetups } from './DiscountVendorClaimFeeSetups';
import { DiscountVendorClaimFeeSetupsRequestBuilder } from './DiscountVendorClaimFeeSetupsRequestBuilder';
import { GupDiscountClaimCalcType } from './GupDiscountClaimCalcType';
import { TableGroupAll } from './TableGroupAll';
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
export class DiscountVendorClaimFeeSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DiscountVendorClaimFeeSetups<DeSerializersT>, DeSerializersT>
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
  ): DiscountVendorClaimFeeSetupsApi<DeSerializersT> {
    return new DiscountVendorClaimFeeSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DiscountVendorClaimFeeSetups;

  requestBuilder(): DiscountVendorClaimFeeSetupsRequestBuilder<DeSerializersT> {
    return new DiscountVendorClaimFeeSetupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DiscountVendorClaimFeeSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DiscountVendorClaimFeeSetups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DiscountVendorClaimFeeSetups<DeSerializersT>,
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
    typeof DiscountVendorClaimFeeSetups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiscountVendorClaimFeeSetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DiscountVendorClaimFeeSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CLAIM_FEE_ID: OrderableEdmTypeField<
      DiscountVendorClaimFeeSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      DiscountVendorClaimFeeSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALC_TYPE: EnumField<
      DiscountVendorClaimFeeSetups<DeSerializers>,
      DeSerializersT,
      GupDiscountClaimCalcType,
      true,
      true
    >;
    VENDOR_CODE: EnumField<
      DiscountVendorClaimFeeSetups<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    ACCOUNT_SELECTION: OrderableEdmTypeField<
      DiscountVendorClaimFeeSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      DiscountVendorClaimFeeSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DiscountVendorClaimFeeSetups<DeSerializers>>;
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
         * Static representation of the {@link claimFeeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLAIM_FEE_ID: fieldBuilder.buildEdmTypeField(
          'ClaimFeeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link calcType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALC_TYPE: fieldBuilder.buildEnumField(
          'CalcType',
          GupDiscountClaimCalcType,
          true
        ),
        /**
         * Static representation of the {@link vendorCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_CODE: fieldBuilder.buildEnumField(
          'VendorCode',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link accountSelection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_SELECTION: fieldBuilder.buildEdmTypeField(
          'AccountSelection',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DiscountVendorClaimFeeSetups)
      };
    }

    return this._schema;
  }
}
