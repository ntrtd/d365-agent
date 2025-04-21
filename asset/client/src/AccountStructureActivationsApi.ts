/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccountStructureActivations } from './AccountStructureActivations';
import { AccountStructureActivationsRequestBuilder } from './AccountStructureActivationsRequestBuilder';
import { AccountStructuresApi } from './AccountStructuresApi';
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
export class AccountStructureActivationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AccountStructureActivations<DeSerializersT>, DeSerializersT>
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
  ): AccountStructureActivationsApi<DeSerializersT> {
    return new AccountStructureActivationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureActivationEntityRelatedRoleLedgerAccountStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ACTIVATION_ENTITY_RELATED_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY: OneToOneLink<
      AccountStructureActivations<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AccountStructuresApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      LEDGER_ACCOUNT_STRUCTURE_ACTIVATION_ENTITY_RELATED_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY:
        new OneToOneLink(
          'LedgerAccountStructureActivationEntity_RelatedRole_LedgerAccountStructureEntity',
          this,
          linkedApis[0]
        )
    };
    return this;
  }

  entityConstructor = AccountStructureActivations;

  requestBuilder(): AccountStructureActivationsRequestBuilder<DeSerializersT> {
    return new AccountStructureActivationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AccountStructureActivations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AccountStructureActivations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AccountStructureActivations<DeSerializersT>,
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
    typeof AccountStructureActivations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AccountStructureActivations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCOUNT_STRUCTURE: OrderableEdmTypeField<
      AccountStructureActivations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DO_ACTIVATE: EnumField<
      AccountStructureActivations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link ledgerAccountStructureActivationEntityRelatedRoleLedgerAccountStructureEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_STRUCTURE_ACTIVATION_ENTITY_RELATED_ROLE_LEDGER_ACCOUNT_STRUCTURE_ENTITY: OneToOneLink<
      AccountStructureActivations<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AccountStructureActivations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link accountStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'AccountStructure',
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
        ALL_FIELDS: new AllFields('*', AccountStructureActivations)
      };
    }

    return this._schema;
  }
}
