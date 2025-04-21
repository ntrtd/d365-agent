/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FbGeneralAdjustmentCodesIpi } from './FbGeneralAdjustmentCodesIpi';
import { FbGeneralAdjustmentCodesIpiRequestBuilder } from './FbGeneralAdjustmentCodesIpiRequestBuilder';
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
export class FbGeneralAdjustmentCodesIpiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FbGeneralAdjustmentCodesIpi<DeSerializersT>, DeSerializersT>
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
  ): FbGeneralAdjustmentCodesIpiApi<DeSerializersT> {
    return new FbGeneralAdjustmentCodesIpiApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FbGeneralAdjustmentCodesIpi;

  requestBuilder(): FbGeneralAdjustmentCodesIpiRequestBuilder<DeSerializersT> {
    return new FbGeneralAdjustmentCodesIpiRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FbGeneralAdjustmentCodesIpi<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FbGeneralAdjustmentCodesIpi<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FbGeneralAdjustmentCodesIpi<DeSerializersT>,
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
    typeof FbGeneralAdjustmentCodesIpi,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FbGeneralAdjustmentCodesIpi,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ADJUSTMENT_CODE: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesIpi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECEITA_CODE: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesIpi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OTHER_DEBIT: EnumField<
      FbGeneralAdjustmentCodesIpi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_REVERSAL: EnumField<
      FbGeneralAdjustmentCodesIpi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesIpi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO_DATE: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesIpi<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_FROM_DATE: OrderableEdmTypeField<
      FbGeneralAdjustmentCodesIpi<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_TAX_REFUND: EnumField<
      FbGeneralAdjustmentCodesIpi<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<FbGeneralAdjustmentCodesIpi<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link adjustmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_CODE: fieldBuilder.buildEdmTypeField(
          'AdjustmentCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link receitaCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEITA_CODE: fieldBuilder.buildEdmTypeField(
          'ReceitaCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link otherDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OTHER_DEBIT: fieldBuilder.buildEnumField('OtherDebit', NoYes, true),
        /**
         * Static representation of the {@link isReversal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REVERSAL: fieldBuilder.buildEnumField('IsReversal', NoYes, true),
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
         * Static representation of the {@link validToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO_DATE: fieldBuilder.buildEdmTypeField(
          'ValidToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'ValidFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isTaxRefund} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TAX_REFUND: fieldBuilder.buildEnumField('IsTaxRefund', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FbGeneralAdjustmentCodesIpi)
      };
    }

    return this._schema;
  }
}
