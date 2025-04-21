/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetPlanProcessAdministrations } from './BudgetPlanProcessAdministrations';
import { BudgetPlanProcessAdministrationsRequestBuilder } from './BudgetPlanProcessAdministrationsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class BudgetPlanProcessAdministrationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BudgetPlanProcessAdministrations<DeSerializersT>, DeSerializersT>
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
  ): BudgetPlanProcessAdministrationsApi<DeSerializersT> {
    return new BudgetPlanProcessAdministrationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BudgetPlanProcessAdministrations;

  requestBuilder(): BudgetPlanProcessAdministrationsRequestBuilder<DeSerializersT> {
    return new BudgetPlanProcessAdministrationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BudgetPlanProcessAdministrations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetPlanProcessAdministrations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetPlanProcessAdministrations<DeSerializersT>,
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
    typeof BudgetPlanProcessAdministrations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetPlanProcessAdministrations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROCESS: OrderableEdmTypeField<
      BudgetPlanProcessAdministrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      BudgetPlanProcessAdministrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTY_NAME: OrderableEdmTypeField<
      BudgetPlanProcessAdministrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW: OrderableEdmTypeField<
      BudgetPlanProcessAdministrations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BudgetPlanProcessAdministrations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link process} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS: fieldBuilder.buildEdmTypeField('Process', 'Edm.String', false),
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link partyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NAME: fieldBuilder.buildEdmTypeField(
          'PartyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workflow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW: fieldBuilder.buildEdmTypeField(
          'Workflow',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetPlanProcessAdministrations)
      };
    }

    return this._schema;
  }
}
