/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailOperations } from './RetailOperations';
import { RetailOperationsRequestBuilder } from './RetailOperationsRequestBuilder';
import { NoYes } from './NoYes';
import { RetailActionPropertyLookupTypeBase } from './RetailActionPropertyLookupTypeBase';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class RetailOperationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailOperations<DeSerializersT>, DeSerializersT>
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
  ): RetailOperationsApi<DeSerializersT> {
    return new RetailOperationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailOperations;

  requestBuilder(): RetailOperationsRequestBuilder<DeSerializersT> {
    return new RetailOperationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailOperations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailOperations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailOperations<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailOperations, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailOperations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    OPERATION_ID: OrderableEdmTypeField<
      RetailOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ENABLE_NOTIFICATIONS: EnumField<
      RetailOperations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OPERATION_NAME: OrderableEdmTypeField<
      RetailOperations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_USER_ACCESS: EnumField<
      RetailOperations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USER_OPERATION: EnumField<
      RetailOperations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTION_PROPERTY_LOOKUP_TYPE: EnumField<
      RetailOperations<DeSerializers>,
      DeSerializersT,
      RetailActionPropertyLookupTypeBase,
      true,
      true
    >;
    PERMISSION_ID: OrderableEdmTypeField<
      RetailOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PERMISSION_ID_2: OrderableEdmTypeField<
      RetailOperations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailOperations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link operationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_ID: fieldBuilder.buildEdmTypeField(
          'OperationId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link enableNotifications} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_NOTIFICATIONS: fieldBuilder.buildEnumField(
          'EnableNotifications',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link operationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_NAME: fieldBuilder.buildEdmTypeField(
          'OperationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkUserAccess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_USER_ACCESS: fieldBuilder.buildEnumField(
          'CheckUserAccess',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link userOperation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_OPERATION: fieldBuilder.buildEnumField(
          'UserOperation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link actionPropertyLookupType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_PROPERTY_LOOKUP_TYPE: fieldBuilder.buildEnumField(
          'ActionPropertyLookupType',
          RetailActionPropertyLookupTypeBase,
          true
        ),
        /**
         * Static representation of the {@link permissionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERMISSION_ID: fieldBuilder.buildEdmTypeField(
          'PermissionId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link permissionId2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERMISSION_ID_2: fieldBuilder.buildEdmTypeField(
          'PermissionId2',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailOperations)
      };
    }

    return this._schema;
  }
}
