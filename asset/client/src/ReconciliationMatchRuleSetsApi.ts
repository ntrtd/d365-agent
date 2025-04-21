/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReconciliationMatchRuleSets } from './ReconciliationMatchRuleSets';
import { ReconciliationMatchRuleSetsRequestBuilder } from './ReconciliationMatchRuleSetsRequestBuilder';
import { BankAccountsApi } from './BankAccountsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ReconciliationMatchRuleSetsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ReconciliationMatchRuleSets<DeSerializersT>, DeSerializersT>
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
  ): ReconciliationMatchRuleSetsApi<DeSerializersT> {
    return new ReconciliationMatchRuleSetsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link bankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_ACCOUNT: OneToManyLink<
      ReconciliationMatchRuleSets<DeSerializersT>,
      DeSerializersT,
      BankAccountsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BankAccountsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BANK_ACCOUNT: new OneToManyLink('BankAccount', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ReconciliationMatchRuleSets;

  requestBuilder(): ReconciliationMatchRuleSetsRequestBuilder<DeSerializersT> {
    return new ReconciliationMatchRuleSetsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReconciliationMatchRuleSets<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReconciliationMatchRuleSets<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReconciliationMatchRuleSets<DeSerializersT>,
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
    typeof ReconciliationMatchRuleSets,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReconciliationMatchRuleSets,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    MATCHING_RULE_SET: OrderableEdmTypeField<
      ReconciliationMatchRuleSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ReconciliationMatchRuleSets<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ReconciliationMatchRuleSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATCHING_RULE: OrderableEdmTypeField<
      ReconciliationMatchRuleSets<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_ACCOUNT: OneToManyLink<
      ReconciliationMatchRuleSets<DeSerializersT>,
      DeSerializersT,
      BankAccountsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ReconciliationMatchRuleSets<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link matchingRuleSet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHING_RULE_SET: fieldBuilder.buildEdmTypeField(
          'MatchingRuleSet',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link matchingRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHING_RULE: fieldBuilder.buildEdmTypeField(
          'MatchingRule',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReconciliationMatchRuleSets)
      };
    }

    return this._schema;
  }
}
