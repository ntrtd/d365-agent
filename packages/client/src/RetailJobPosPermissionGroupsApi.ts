/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailJobPosPermissionGroups } from './RetailJobPosPermissionGroups';
import { RetailJobPosPermissionGroupsRequestBuilder } from './RetailJobPosPermissionGroupsRequestBuilder';
import { RetailPosPermissionGroupsApi } from './RetailPosPermissionGroupsApi';
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
export class RetailJobPosPermissionGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailJobPosPermissionGroups<DeSerializersT>, DeSerializersT>
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
  ): RetailJobPosPermissionGroupsApi<DeSerializersT> {
    return new RetailJobPosPermissionGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailPosPermissionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_POS_PERMISSION_GROUP: OneToOneLink<
      RetailJobPosPermissionGroups<DeSerializersT>,
      DeSerializersT,
      RetailPosPermissionGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailPosPermissionGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_POS_PERMISSION_GROUP: new OneToOneLink(
        'RetailPosPermissionGroup',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailJobPosPermissionGroups;

  requestBuilder(): RetailJobPosPermissionGroupsRequestBuilder<DeSerializersT> {
    return new RetailJobPosPermissionGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailJobPosPermissionGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailJobPosPermissionGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailJobPosPermissionGroups<DeSerializersT>,
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
    typeof RetailJobPosPermissionGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailJobPosPermissionGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_ID: OrderableEdmTypeField<
      RetailJobPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POS_PERMISSION_GROUP_ID: OrderableEdmTypeField<
      RetailJobPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailPosPermissionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_POS_PERMISSION_GROUP: OneToOneLink<
      RetailJobPosPermissionGroups<DeSerializersT>,
      DeSerializersT,
      RetailPosPermissionGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailJobPosPermissionGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', false),
        /**
         * Static representation of the {@link posPermissionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_PERMISSION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PosPermissionGroupId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailJobPosPermissionGroups)
      };
    }

    return this._schema;
  }
}
