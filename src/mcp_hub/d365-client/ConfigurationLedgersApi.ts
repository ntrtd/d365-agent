/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ConfigurationLedgers } from './ConfigurationLedgers';
import { ConfigurationLedgersRequestBuilder } from './ConfigurationLedgersRequestBuilder';
import { CurrenciesApi } from './CurrenciesApi';
import { NoYes } from './NoYes';
import { CostConfigurationLedgerStatus } from './CostConfigurationLedgerStatus';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ConfigurationLedgersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ConfigurationLedgers<DeSerializersT>, DeSerializersT>
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
  ): ConfigurationLedgersApi<DeSerializersT> {
    return new ConfigurationLedgersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link costConfigurationLedger} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COST_CONFIGURATION_LEDGER: OneToOneLink<
      ConfigurationLedgers<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [CurrenciesApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      COST_CONFIGURATION_LEDGER: new OneToOneLink(
        'CostConfigurationLedger',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ConfigurationLedgers;

  requestBuilder(): ConfigurationLedgersRequestBuilder<DeSerializersT> {
    return new ConfigurationLedgersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ConfigurationLedgers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ConfigurationLedgers<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ConfigurationLedgers<DeSerializersT>,
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
    typeof ConfigurationLedgers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ConfigurationLedgers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      ConfigurationLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ConfigurationLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_CALENDAR: OrderableEdmTypeField<
      ConfigurationLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      ConfigurationLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONVENTION: OrderableEdmTypeField<
      ConfigurationLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      ConfigurationLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEEDS_PRIMING: EnumField<
      ConfigurationLedgers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXCHANGE_RATE_TYPE: OrderableEdmTypeField<
      ConfigurationLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      ConfigurationLedgers<DeSerializers>,
      DeSerializersT,
      CostConfigurationLedgerStatus,
      true,
      true
    >;
    ENABLED_DATE: OrderableEdmTypeField<
      ConfigurationLedgers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link costConfigurationLedger} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COST_CONFIGURATION_LEDGER: OneToOneLink<
      ConfigurationLedgers<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ConfigurationLedgers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
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
         * Static representation of the {@link fiscalCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR: fieldBuilder.buildEdmTypeField(
          'FiscalCalendar',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link convention} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONVENTION: fieldBuilder.buildEdmTypeField(
          'Convention',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link needsPriming} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEEDS_PRIMING: fieldBuilder.buildEnumField('NeedsPriming', NoYes, true),
        /**
         * Static representation of the {@link exchangeRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ExchangeRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          CostConfigurationLedgerStatus,
          true
        ),
        /**
         * Static representation of the {@link enabledDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLED_DATE: fieldBuilder.buildEdmTypeField(
          'EnabledDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ConfigurationLedgers)
      };
    }

    return this._schema;
  }
}
