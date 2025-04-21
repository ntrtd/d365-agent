/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetControlDocumentsAndJournals } from './BudgetControlDocumentsAndJournals';
import { BudgetControlDocumentsAndJournalsRequestBuilder } from './BudgetControlDocumentsAndJournalsRequestBuilder';
import { BudgetControlConfigurationsApi } from './BudgetControlConfigurationsApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import { BudgetControlSourceIntegrator } from './BudgetControlSourceIntegrator';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BudgetControlDocumentsAndJournalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BudgetControlDocumentsAndJournals<DeSerializersT>, DeSerializersT>
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
  ): BudgetControlDocumentsAndJournalsApi<DeSerializersT> {
    return new BudgetControlDocumentsAndJournalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATIONS: OneToOneLink<
      BudgetControlDocumentsAndJournals<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BudgetControlConfigurationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_CONTROL_CONFIGURATIONS: new OneToOneLink(
        'BudgetControlConfigurations',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BudgetControlDocumentsAndJournals;

  requestBuilder(): BudgetControlDocumentsAndJournalsRequestBuilder<DeSerializersT> {
    return new BudgetControlDocumentsAndJournalsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BudgetControlDocumentsAndJournals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetControlDocumentsAndJournals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetControlDocumentsAndJournals<DeSerializersT>,
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
    typeof BudgetControlDocumentsAndJournals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetControlDocumentsAndJournals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetControlDocumentsAndJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BudgetControlDocumentsAndJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      BudgetControlDocumentsAndJournals<DeSerializers>,
      DeSerializersT,
      BudgetControlConfigurationStatus,
      true,
      true
    >;
    DOCUMENT_OR_JOURNAL: EnumField<
      BudgetControlDocumentsAndJournals<DeSerializers>,
      DeSerializersT,
      BudgetControlSourceIntegrator,
      true,
      true
    >;
    DO_BUDGET_CHECK_ON_ENTRY: EnumField<
      BudgetControlDocumentsAndJournals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ENABLED: EnumField<
      BudgetControlDocumentsAndJournals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IN_USE_BY: OrderableEdmTypeField<
      BudgetControlDocumentsAndJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATIONS: OneToOneLink<
      BudgetControlDocumentsAndJournals<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetControlDocumentsAndJournals<DeSerializers>>;
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
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BudgetControlConfigurationStatus,
          true
        ),
        /**
         * Static representation of the {@link documentOrJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_OR_JOURNAL: fieldBuilder.buildEnumField(
          'DocumentOrJournal',
          BudgetControlSourceIntegrator,
          true
        ),
        /**
         * Static representation of the {@link doBudgetCheckOnEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_BUDGET_CHECK_ON_ENTRY: fieldBuilder.buildEnumField(
          'DoBudgetCheckOnEntry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ENABLED: fieldBuilder.buildEnumField('IsEnabled', NoYes, true),
        /**
         * Static representation of the {@link inUseBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_USE_BY: fieldBuilder.buildEdmTypeField(
          'InUseBy',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetControlDocumentsAndJournals)
      };
    }

    return this._schema;
  }
}
