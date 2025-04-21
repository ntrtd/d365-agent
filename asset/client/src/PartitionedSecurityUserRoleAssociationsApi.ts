/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PartitionedSecurityUserRoleAssociations } from './PartitionedSecurityUserRoleAssociations';
import { PartitionedSecurityUserRoleAssociationsRequestBuilder } from './PartitionedSecurityUserRoleAssociationsRequestBuilder';
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
export class PartitionedSecurityUserRoleAssociationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PartitionedSecurityUserRoleAssociations<DeSerializersT>,
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
  ): PartitionedSecurityUserRoleAssociationsApi<DeSerializersT> {
    return new PartitionedSecurityUserRoleAssociationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PartitionedSecurityUserRoleAssociations;

  requestBuilder(): PartitionedSecurityUserRoleAssociationsRequestBuilder<DeSerializersT> {
    return new PartitionedSecurityUserRoleAssociationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PartitionedSecurityUserRoleAssociations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PartitionedSecurityUserRoleAssociations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PartitionedSecurityUserRoleAssociations<DeSerializersT>,
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
    typeof PartitionedSecurityUserRoleAssociations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PartitionedSecurityUserRoleAssociations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USER_ID: OrderableEdmTypeField<
      PartitionedSecurityUserRoleAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SECURITY_ROLE_IDENTIFIER: OrderableEdmTypeField<
      PartitionedSecurityUserRoleAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTITION_KEY: OrderableEdmTypeField<
      PartitionedSecurityUserRoleAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECURITY_ROLE_NAME: OrderableEdmTypeField<
      PartitionedSecurityUserRoleAssociations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      PartitionedSecurityUserRoleAssociations<DeSerializers>
    >;
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
         * Static representation of the {@link securityRoleIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_ROLE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'SecurityRoleIdentifier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link partitionKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTITION_KEY: fieldBuilder.buildEdmTypeField(
          'PartitionKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link securityRoleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_ROLE_NAME: fieldBuilder.buildEdmTypeField(
          'SecurityRoleName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PartitionedSecurityUserRoleAssociations)
      };
    }

    return this._schema;
  }
}
