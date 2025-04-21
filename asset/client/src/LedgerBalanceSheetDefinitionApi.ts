/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerBalanceSheetDefinition } from './LedgerBalanceSheetDefinition';
import { LedgerBalanceSheetDefinitionRequestBuilder } from './LedgerBalanceSheetDefinitionRequestBuilder';
import { NoYes } from './NoYes';
import { RoundOffType } from './RoundOffType';
import { LedgerReportBalanceType } from './LedgerReportBalanceType';
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
export class LedgerBalanceSheetDefinitionApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LedgerBalanceSheetDefinition<DeSerializersT>, DeSerializersT>
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
  ): LedgerBalanceSheetDefinitionApi<DeSerializersT> {
    return new LedgerBalanceSheetDefinitionApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LedgerBalanceSheetDefinition;

  requestBuilder(): LedgerBalanceSheetDefinitionRequestBuilder<DeSerializersT> {
    return new LedgerBalanceSheetDefinitionRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerBalanceSheetDefinition<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LedgerBalanceSheetDefinition<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerBalanceSheetDefinition<DeSerializersT>,
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
    typeof LedgerBalanceSheetDefinition,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerBalanceSheetDefinition,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LedgerBalanceSheetDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE: OrderableEdmTypeField<
      LedgerBalanceSheetDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GROSS_LINE_ID: OrderableEdmTypeField<
      LedgerBalanceSheetDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ADJUSTMENT_LINE_ID: OrderableEdmTypeField<
      LedgerBalanceSheetDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LedgerBalanceSheetDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADJUSTMENT_TOTAL: OrderableEdmTypeField<
      LedgerBalanceSheetDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADJUSTMENT_MAIN_ACCOUNT: OrderableEdmTypeField<
      LedgerBalanceSheetDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_GROUP_OF_ACCOUNTS: OrderableEdmTypeField<
      LedgerBalanceSheetDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADJUSTMENT_INVERT_SIGN: EnumField<
      LedgerBalanceSheetDefinition<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GROSS_MAIN_ACCOUNT: OrderableEdmTypeField<
      LedgerBalanceSheetDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUNDING_FORM: EnumField<
      LedgerBalanceSheetDefinition<DeSerializers>,
      DeSerializersT,
      RoundOffType,
      true,
      true
    >;
    ADJUSTMENT_GROUP_OF_ACCOUNTS: OrderableEdmTypeField<
      LedgerBalanceSheetDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_TOTAL: OrderableEdmTypeField<
      LedgerBalanceSheetDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LINE_TYPE: EnumField<
      LedgerBalanceSheetDefinition<DeSerializers>,
      DeSerializersT,
      LedgerReportBalanceType,
      true,
      true
    >;
    MARK: OrderableEdmTypeField<
      LedgerBalanceSheetDefinition<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_INVERT_SIGN: EnumField<
      LedgerBalanceSheetDefinition<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LedgerBalanceSheetDefinition<DeSerializers>>;
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
         * Static representation of the {@link line} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE: fieldBuilder.buildEdmTypeField('Line', 'Edm.Int32', false),
        /**
         * Static representation of the {@link grossLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_LINE_ID: fieldBuilder.buildEdmTypeField(
          'GrossLineId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link adjustmentLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_LINE_ID: fieldBuilder.buildEdmTypeField(
          'AdjustmentLineId',
          'Edm.Guid',
          false
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
         * Static representation of the {@link adjustmentTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_TOTAL: fieldBuilder.buildEdmTypeField(
          'AdjustmentTotal',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link adjustmentMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'AdjustmentMainAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link grossGroupOfAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_GROUP_OF_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'GrossGroupOfAccounts',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link adjustmentInvertSign} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_INVERT_SIGN: fieldBuilder.buildEnumField(
          'AdjustmentInvertSign',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link grossMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'GrossMainAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link roundingForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_FORM: fieldBuilder.buildEnumField(
          'RoundingForm',
          RoundOffType,
          true
        ),
        /**
         * Static representation of the {@link adjustmentGroupOfAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_GROUP_OF_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'AdjustmentGroupOfAccounts',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link grossTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_TOTAL: fieldBuilder.buildEdmTypeField(
          'GrossTotal',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField(
          'LineType',
          LedgerReportBalanceType,
          true
        ),
        /**
         * Static representation of the {@link mark} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARK: fieldBuilder.buildEdmTypeField('Mark', 'Edm.String', true),
        /**
         * Static representation of the {@link grossInvertSign} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_INVERT_SIGN: fieldBuilder.buildEnumField(
          'GrossInvertSign',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerBalanceSheetDefinition)
      };
    }

    return this._schema;
  }
}
