/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ZakatLedgerItemCodes } from './ZakatLedgerItemCodes';
import { ZakatLedgerItemCodesRequestBuilder } from './ZakatLedgerItemCodesRequestBuilder';
import { NoYes } from './NoYes';
import { LedgerItemTypeZakatSa } from './LedgerItemTypeZakatSa';
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
export class ZakatLedgerItemCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ZakatLedgerItemCodes<DeSerializersT>, DeSerializersT>
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
  ): ZakatLedgerItemCodesApi<DeSerializersT> {
    return new ZakatLedgerItemCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ZakatLedgerItemCodes;

  requestBuilder(): ZakatLedgerItemCodesRequestBuilder<DeSerializersT> {
    return new ZakatLedgerItemCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ZakatLedgerItemCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ZakatLedgerItemCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ZakatLedgerItemCodes<DeSerializersT>,
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
    typeof ZakatLedgerItemCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ZakatLedgerItemCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ZakatLedgerItemCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_CODE: OrderableEdmTypeField<
      ZakatLedgerItemCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_COST: EnumField<
      ZakatLedgerItemCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ASSET: EnumField<
      ZakatLedgerItemCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_REVENUE: EnumField<
      ZakatLedgerItemCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_BALANCE: EnumField<
      ZakatLedgerItemCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_LIABILITY: EnumField<
      ZakatLedgerItemCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_TYPE: EnumField<
      ZakatLedgerItemCodes<DeSerializers>,
      DeSerializersT,
      LedgerItemTypeZakatSa,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ZakatLedgerItemCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PROFIT_LOSS: EnumField<
      ZakatLedgerItemCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ZakatLedgerItemCodes<DeSerializers>>;
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
         * Static representation of the {@link itemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CODE: fieldBuilder.buildEdmTypeField(
          'ItemCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COST: fieldBuilder.buildEnumField('IsCost', NoYes, true),
        /**
         * Static representation of the {@link isAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ASSET: fieldBuilder.buildEnumField('IsAsset', NoYes, true),
        /**
         * Static representation of the {@link isRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REVENUE: fieldBuilder.buildEnumField('IsRevenue', NoYes, true),
        /**
         * Static representation of the {@link isBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BALANCE: fieldBuilder.buildEnumField('IsBalance', NoYes, true),
        /**
         * Static representation of the {@link isLiability} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LIABILITY: fieldBuilder.buildEnumField('IsLiability', NoYes, true),
        /**
         * Static representation of the {@link itemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_TYPE: fieldBuilder.buildEnumField(
          'ItemType',
          LedgerItemTypeZakatSa,
          true
        ),
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
         * Static representation of the {@link isProfitLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROFIT_LOSS: fieldBuilder.buildEnumField(
          'IsProfitLoss',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ZakatLedgerItemCodes)
      };
    }

    return this._schema;
  }
}
