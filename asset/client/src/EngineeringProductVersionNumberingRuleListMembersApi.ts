/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringProductVersionNumberingRuleListMembers } from './EngineeringProductVersionNumberingRuleListMembers';
import { EngineeringProductVersionNumberingRuleListMembersRequestBuilder } from './EngineeringProductVersionNumberingRuleListMembersRequestBuilder';
import { EngineeringProductVersionNumberingRulesApi } from './EngineeringProductVersionNumberingRulesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class EngineeringProductVersionNumberingRuleListMembersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringProductVersionNumberingRuleListMembers<DeSerializersT>,
      DeSerializersT
    >
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
  ): EngineeringProductVersionNumberingRuleListMembersApi<DeSerializersT> {
    return new EngineeringProductVersionNumberingRuleListMembersApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringProductVersionNumberingRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_VERSION_NUMBERING_RULE: OneToOneLink<
      EngineeringProductVersionNumberingRuleListMembers<DeSerializersT>,
      DeSerializersT,
      EngineeringProductVersionNumberingRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EngineeringProductVersionNumberingRulesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_PRODUCT_VERSION_NUMBERING_RULE: new OneToOneLink(
        'EngineeringProductVersionNumberingRule',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = EngineeringProductVersionNumberingRuleListMembers;

  requestBuilder(): EngineeringProductVersionNumberingRuleListMembersRequestBuilder<DeSerializersT> {
    return new EngineeringProductVersionNumberingRuleListMembersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringProductVersionNumberingRuleListMembers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringProductVersionNumberingRuleListMembers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringProductVersionNumberingRuleListMembers<DeSerializersT>,
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
    typeof EngineeringProductVersionNumberingRuleListMembers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringProductVersionNumberingRuleListMembers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    VERSION_NUMBERING_RULE_NAME: OrderableEdmTypeField<
      EngineeringProductVersionNumberingRuleListMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_VERSION_NAME: OrderableEdmTypeField<
      EngineeringProductVersionNumberingRuleListMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      EngineeringProductVersionNumberingRuleListMembers<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringProductVersionNumberingRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_VERSION_NUMBERING_RULE: OneToOneLink<
      EngineeringProductVersionNumberingRuleListMembers<DeSerializersT>,
      DeSerializersT,
      EngineeringProductVersionNumberingRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringProductVersionNumberingRuleListMembers<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link versionNumberingRuleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION_NUMBERING_RULE_NAME: fieldBuilder.buildEdmTypeField(
          'VersionNumberingRuleName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productVersionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_NAME: fieldBuilder.buildEdmTypeField(
          'ProductVersionName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          EngineeringProductVersionNumberingRuleListMembers
        )
      };
    }

    return this._schema;
  }
}
