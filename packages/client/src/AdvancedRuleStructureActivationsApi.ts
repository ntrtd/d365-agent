/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AdvancedRuleStructureActivations } from './AdvancedRuleStructureActivations';
import { AdvancedRuleStructureActivationsRequestBuilder } from './AdvancedRuleStructureActivationsRequestBuilder';
import { LedgerAdvancedRuleStructuresApi } from './LedgerAdvancedRuleStructuresApi';
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
export class AdvancedRuleStructureActivationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AdvancedRuleStructureActivations<DeSerializersT>, DeSerializersT>
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
  ): AdvancedRuleStructureActivationsApi<DeSerializersT> {
    return new AdvancedRuleStructureActivationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureActivationEntityRelatedRoleLedgerAdvancedRuleStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ACTIVATION_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY: OneToOneLink<
      AdvancedRuleStructureActivations<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [LedgerAdvancedRuleStructuresApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_ADVANCED_RULE_STRUCTURE_ACTIVATION_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY:
        new OneToOneLink(
          'LedgerAdvancedRuleStructureActivationEntity_RelatedRole_LedgerAdvancedRuleStructureEntity',
          this,
          linkedApis[0]
        )
    };
    return this;
  }

  entityConstructor = AdvancedRuleStructureActivations;

  requestBuilder(): AdvancedRuleStructureActivationsRequestBuilder<DeSerializersT> {
    return new AdvancedRuleStructureActivationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AdvancedRuleStructureActivations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AdvancedRuleStructureActivations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AdvancedRuleStructureActivations<DeSerializersT>,
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
    typeof AdvancedRuleStructureActivations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AdvancedRuleStructureActivations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ADVANCED_RULE_STRUCTURE: OrderableEdmTypeField<
      AdvancedRuleStructureActivations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DO_ACTIVATE: EnumField<
      AdvancedRuleStructureActivations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAdvancedRuleStructureActivationEntityRelatedRoleLedgerAdvancedRuleStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ADVANCED_RULE_STRUCTURE_ACTIVATION_ENTITY_RELATED_ROLE_LEDGER_ADVANCED_RULE_STRUCTURE_ENTITY: OneToOneLink<
      AdvancedRuleStructureActivations<DeSerializersT>,
      DeSerializersT,
      LedgerAdvancedRuleStructuresApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AdvancedRuleStructureActivations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link advancedRuleStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCED_RULE_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'AdvancedRuleStructure',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link doActivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_ACTIVATE: fieldBuilder.buildEnumField('DoActivate', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AdvancedRuleStructureActivations)
      };
    }

    return this._schema;
  }
}
