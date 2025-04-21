/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorCollaborationUserRequests } from './VendorCollaborationUserRequests';
import { VendorCollaborationUserRequestsRequestBuilder } from './VendorCollaborationUserRequestsRequestBuilder';
import { SysUserRequestUserType } from './SysUserRequestUserType';
import { SysUserRequestStatus } from './SysUserRequestStatus';
import { SysUserRequestAction } from './SysUserRequestAction';
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
export class VendorCollaborationUserRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendorCollaborationUserRequests<DeSerializersT>, DeSerializersT>
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
  ): VendorCollaborationUserRequestsApi<DeSerializersT> {
    return new VendorCollaborationUserRequestsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendorCollaborationUserRequests;

  requestBuilder(): VendorCollaborationUserRequestsRequestBuilder<DeSerializersT> {
    return new VendorCollaborationUserRequestsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    VendorCollaborationUserRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorCollaborationUserRequests<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorCollaborationUserRequests<DeSerializersT>,
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
    typeof VendorCollaborationUserRequests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorCollaborationUserRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REQUEST_ID: OrderableEdmTypeField<
      VendorCollaborationUserRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER_ALIAS: OrderableEdmTypeField<
      VendorCollaborationUserRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOLVED_DATE_TIME: OrderableEdmTypeField<
      VendorCollaborationUserRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    USER_TYPE: EnumField<
      VendorCollaborationUserRequests<DeSerializers>,
      DeSerializersT,
      SysUserRequestUserType,
      true,
      true
    >;
    USER_NETWORK_DOMAIN: OrderableEdmTypeField<
      VendorCollaborationUserRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USERS_LANGUAGE_ID: OrderableEdmTypeField<
      VendorCollaborationUserRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_STATUS: EnumField<
      VendorCollaborationUserRequests<DeSerializers>,
      DeSerializersT,
      SysUserRequestStatus,
      true,
      true
    >;
    USER_EMAIL: OrderableEdmTypeField<
      VendorCollaborationUserRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_ACTION: EnumField<
      VendorCollaborationUserRequests<DeSerializers>,
      DeSerializersT,
      SysUserRequestAction,
      true,
      true
    >;
    SUBMITTED_DATE_TIME: OrderableEdmTypeField<
      VendorCollaborationUserRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    USERS_FULL_NAME: OrderableEdmTypeField<
      VendorCollaborationUserRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      VendorCollaborationUserRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_JUSTIFICATION: OrderableEdmTypeField<
      VendorCollaborationUserRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendorCollaborationUserRequests<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link requestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RequestId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link userAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ALIAS: fieldBuilder.buildEdmTypeField(
          'UserAlias',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resolvedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLVED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ResolvedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link userType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_TYPE: fieldBuilder.buildEnumField(
          'UserType',
          SysUserRequestUserType,
          true
        ),
        /**
         * Static representation of the {@link userNetworkDomain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NETWORK_DOMAIN: fieldBuilder.buildEdmTypeField(
          'UserNetworkDomain',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link usersLanguageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USERS_LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'UsersLanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_STATUS: fieldBuilder.buildEnumField(
          'RequestStatus',
          SysUserRequestStatus,
          true
        ),
        /**
         * Static representation of the {@link userEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_EMAIL: fieldBuilder.buildEdmTypeField(
          'UserEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ACTION: fieldBuilder.buildEnumField(
          'RequestAction',
          SysUserRequestAction,
          true
        ),
        /**
         * Static representation of the {@link submittedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMITTED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SubmittedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link usersFullName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USERS_FULL_NAME: fieldBuilder.buildEdmTypeField(
          'UsersFullName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.String', true),
        /**
         * Static representation of the {@link businessJustification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_JUSTIFICATION: fieldBuilder.buildEdmTypeField(
          'BusinessJustification',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorCollaborationUserRequests)
      };
    }

    return this._schema;
  }
}
