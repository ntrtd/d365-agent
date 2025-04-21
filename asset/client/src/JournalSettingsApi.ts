/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JournalSettings } from './JournalSettings';
import { JournalSettingsRequestBuilder } from './JournalSettingsRequestBuilder';
import { OverdueJournalTypeW } from './OverdueJournalTypeW';
import { ComparisonConditionW } from './ComparisonConditionW';
import { NoYes } from './NoYes';
import { OverdueCalcTypeW } from './OverdueCalcTypeW';
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
export class JournalSettingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JournalSettings<DeSerializersT>, DeSerializersT>
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
  ): JournalSettingsApi<DeSerializersT> {
    return new JournalSettingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = JournalSettings;

  requestBuilder(): JournalSettingsRequestBuilder<DeSerializersT> {
    return new JournalSettingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JournalSettings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JournalSettings<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<JournalSettings<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof JournalSettings, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JournalSettings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      JournalSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_ID: OrderableEdmTypeField<
      JournalSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PAYM_TERM_DAYS: OrderableEdmTypeField<
      JournalSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    JOURNAL_TYPE: EnumField<
      JournalSettings<DeSerializers>,
      DeSerializersT,
      OverdueJournalTypeW,
      true,
      true
    >;
    MINIMUM_NUMBER_OF_DAYS: OrderableEdmTypeField<
      JournalSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAXIMUM_NUMBER_OF_DAYS: OrderableEdmTypeField<
      JournalSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONDITION: EnumField<
      JournalSettings<DeSerializers>,
      DeSerializersT,
      ComparisonConditionW,
      true,
      true
    >;
    IS_VALIDATE_ENABLED: EnumField<
      JournalSettings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CALCULATION_TYPE: EnumField<
      JournalSettings<DeSerializers>,
      DeSerializersT,
      OverdueCalcTypeW,
      true,
      true
    >;
    ALL_FIELDS: AllFields<JournalSettings<DeSerializers>>;
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
         * Static representation of the {@link lineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ID: fieldBuilder.buildEdmTypeField('LineId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link paymTermDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_TERM_DAYS: fieldBuilder.buildEdmTypeField(
          'PaymTermDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link journalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TYPE: fieldBuilder.buildEnumField(
          'JournalType',
          OverdueJournalTypeW,
          true
        ),
        /**
         * Static representation of the {@link minimumNumberOfDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_NUMBER_OF_DAYS: fieldBuilder.buildEdmTypeField(
          'MinimumNumberOfDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link maximumNumberOfDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_NUMBER_OF_DAYS: fieldBuilder.buildEdmTypeField(
          'MaximumNumberOfDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link condition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION: fieldBuilder.buildEnumField(
          'Condition',
          ComparisonConditionW,
          true
        ),
        /**
         * Static representation of the {@link isValidateEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VALIDATE_ENABLED: fieldBuilder.buildEnumField(
          'IsValidateEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link calculationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_TYPE: fieldBuilder.buildEnumField(
          'CalculationType',
          OverdueCalcTypeW,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JournalSettings)
      };
    }

    return this._schema;
  }
}
