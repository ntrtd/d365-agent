/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpMobileMasterData } from './ExpMobileMasterData';
import { ExpMobileMasterDataRequestBuilder } from './ExpMobileMasterDataRequestBuilder';
import { Timezone } from './Timezone';
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
export class ExpMobileMasterDataApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpMobileMasterData<DeSerializersT>, DeSerializersT>
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
  ): ExpMobileMasterDataApi<DeSerializersT> {
    return new ExpMobileMasterDataApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpMobileMasterData;

  requestBuilder(): ExpMobileMasterDataRequestBuilder<DeSerializersT> {
    return new ExpMobileMasterDataRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpMobileMasterData<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpMobileMasterData<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpMobileMasterData<DeSerializersT>,
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
    typeof ExpMobileMasterData,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpMobileMasterData,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USER_ID: OrderableEdmTypeField<
      ExpMobileMasterData<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKER_DEFAULT_TAX_GROUP: OrderableEdmTypeField<
      ExpMobileMasterData<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_PREFERRED_HELP_LANGUAGE: OrderableEdmTypeField<
      ExpMobileMasterData<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_PREFERRED_LANGUAGE: OrderableEdmTypeField<
      ExpMobileMasterData<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_PREFERRED_TIME_ZONE_ID: OrderableEdmTypeField<
      ExpMobileMasterData<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_NETWORK_ALIAS: OrderableEdmTypeField<
      ExpMobileMasterData<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_PREFERRED_TIME_ZONE: EnumField<
      ExpMobileMasterData<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    IS_RE_IMAGINED_PER_DIEM_ENABLED: EnumField<
      ExpMobileMasterData<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    APPLY_PRE_OPS_FILTER: EnumField<
      ExpMobileMasterData<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USER_PREFERRED_LEGAL_ENTITY: OrderableEdmTypeField<
      ExpMobileMasterData<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ABILITY_TO_ITEMIZE_RECURRING_EXPENSES_QUICKLY_ENABLED: EnumField<
      ExpMobileMasterData<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_EXPENSE_OCR_ENABLED: EnumField<
      ExpMobileMasterData<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USER_NAME: OrderableEdmTypeField<
      ExpMobileMasterData<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REIMAGINED_UI_ENABLED: EnumField<
      ExpMobileMasterData<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREATING_WORKER: OrderableEdmTypeField<
      ExpMobileMasterData<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    USER_PREFERRED_LOCALE: OrderableEdmTypeField<
      ExpMobileMasterData<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExpMobileMasterData<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.String', false),
        /**
         * Static representation of the {@link workerDefaultTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_DEFAULT_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'WorkerDefaultTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userPreferredHelpLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_PREFERRED_HELP_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'UserPreferredHelpLanguage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userPreferredLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_PREFERRED_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'UserPreferredLanguage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userPreferredTimeZoneId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_PREFERRED_TIME_ZONE_ID: fieldBuilder.buildEdmTypeField(
          'UserPreferredTimeZoneId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userNetworkAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NETWORK_ALIAS: fieldBuilder.buildEdmTypeField(
          'UserNetworkAlias',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userPreferredTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_PREFERRED_TIME_ZONE: fieldBuilder.buildEnumField(
          'UserPreferredTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link isReImaginedPerDiemEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RE_IMAGINED_PER_DIEM_ENABLED: fieldBuilder.buildEnumField(
          'IsReImaginedPerDiemEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link applyPreOpsFilter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLY_PRE_OPS_FILTER: fieldBuilder.buildEnumField(
          'ApplyPreOpsFilter',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link userPreferredLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_PREFERRED_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'UserPreferredLegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAbilityToItemizeRecurringExpensesQuicklyEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ABILITY_TO_ITEMIZE_RECURRING_EXPENSES_QUICKLY_ENABLED:
          fieldBuilder.buildEnumField(
            'IsAbilityToItemizeRecurringExpensesQuicklyEnabled',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isExpenseOcrEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXPENSE_OCR_ENABLED: fieldBuilder.buildEnumField(
          'IsExpenseOCREnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link userName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NAME: fieldBuilder.buildEdmTypeField(
          'UserName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isReimaginedUiEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REIMAGINED_UI_ENABLED: fieldBuilder.buildEnumField(
          'IsReimaginedUIEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link creatingWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATING_WORKER: fieldBuilder.buildEdmTypeField(
          'CreatingWorker',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link userPreferredLocale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_PREFERRED_LOCALE: fieldBuilder.buildEdmTypeField(
          'UserPreferredLocale',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpMobileMasterData)
      };
    }

    return this._schema;
  }
}
