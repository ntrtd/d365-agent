/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PolicyTypes } from './PolicyTypes';
import { PolicyTypesRequestBuilder } from './PolicyTypesRequestBuilder';
import { SysPolicyTypeEnum } from './SysPolicyTypeEnum';
import { NoYes } from './NoYes';
import { HierarchyPurpose } from './HierarchyPurpose';
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
  EnumField,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class PolicyTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PolicyTypes<DeSerializersT>, DeSerializersT>
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
  ): PolicyTypesApi<DeSerializersT> {
    return new PolicyTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PolicyTypes;

  requestBuilder(): PolicyTypesRequestBuilder<DeSerializersT> {
    return new PolicyTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PolicyTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PolicyTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PolicyTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PolicyTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PolicyTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POLICY_TYPE: EnumField<
      PolicyTypes<DeSerializers>,
      DeSerializersT,
      SysPolicyTypeEnum,
      true,
      true
    >;
    POLICY_NAME: OrderableEdmTypeField<
      PolicyTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_POLICY_READ_ONLY: EnumField<
      PolicyTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURPOSE: EnumField<
      PolicyTypes<DeSerializers>,
      DeSerializersT,
      HierarchyPurpose,
      true,
      true
    >;
    DROP_DIALOG: EnumField<
      PolicyTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_REASSIGN_ORGANIZATION_SUPPORTED: EnumField<
      PolicyTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PolicyTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link policyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_TYPE: fieldBuilder.buildEnumField(
          'PolicyType',
          SysPolicyTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link policyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'PolicyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPolicyReadOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POLICY_READ_ONLY: fieldBuilder.buildEnumField(
          'IsPolicyReadOnly',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link purpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE: fieldBuilder.buildEnumField('Purpose', HierarchyPurpose, true),
        /**
         * Static representation of the {@link dropDialog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DROP_DIALOG: fieldBuilder.buildEnumField('DropDialog', NoYes, true),
        /**
         * Static representation of the {@link isReassignOrganizationSupported} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REASSIGN_ORGANIZATION_SUPPORTED: fieldBuilder.buildEnumField(
          'IsReassignOrganizationSupported',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PolicyTypes)
      };
    }

    return this._schema;
  }
}
