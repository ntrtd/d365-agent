/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApprovalUsers } from './ApprovalUsers';
import { ApprovalUsersRequestBuilder } from './ApprovalUsersRequestBuilder';
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
export class ApprovalUsersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApprovalUsers<DeSerializersT>, DeSerializersT>
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
  ): ApprovalUsersApi<DeSerializersT> {
    return new ApprovalUsersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ApprovalUsers;

  requestBuilder(): ApprovalUsersRequestBuilder<DeSerializersT> {
    return new ApprovalUsersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApprovalUsers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApprovalUsers<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ApprovalUsers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ApprovalUsers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ApprovalUsers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USER_ID: OrderableEdmTypeField<
      ApprovalUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER_COMPANY: OrderableEdmTypeField<
      ApprovalUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_OBJECT_ID: OrderableEdmTypeField<
      ApprovalUsers<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    USER_NAME: OrderableEdmTypeField<
      ApprovalUsers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ApprovalUsers<DeSerializers>>;
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
         * Static representation of the {@link userCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_COMPANY: fieldBuilder.buildEdmTypeField(
          'UserCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userObjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_OBJECT_ID: fieldBuilder.buildEdmTypeField(
          'UserObjectId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link userName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NAME: fieldBuilder.buildEdmTypeField(
          'UserName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApprovalUsers)
      };
    }

    return this._schema;
  }
}
