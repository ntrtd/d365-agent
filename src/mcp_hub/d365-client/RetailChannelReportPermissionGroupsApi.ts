/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailChannelReportPermissionGroups } from './RetailChannelReportPermissionGroups';
import { RetailChannelReportPermissionGroupsRequestBuilder } from './RetailChannelReportPermissionGroupsRequestBuilder';
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
export class RetailChannelReportPermissionGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RetailChannelReportPermissionGroups<DeSerializersT>,
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
  ): RetailChannelReportPermissionGroupsApi<DeSerializersT> {
    return new RetailChannelReportPermissionGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailChannelReportPermissionGroups;

  requestBuilder(): RetailChannelReportPermissionGroupsRequestBuilder<DeSerializersT> {
    return new RetailChannelReportPermissionGroupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailChannelReportPermissionGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailChannelReportPermissionGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailChannelReportPermissionGroups<DeSerializersT>,
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
    typeof RetailChannelReportPermissionGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailChannelReportPermissionGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CHANNEL_REPORT_ID: OrderableEdmTypeField<
      RetailChannelReportPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POS_PERMISSION_GROUP_ID: OrderableEdmTypeField<
      RetailChannelReportPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailChannelReportPermissionGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link channelReportId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL_REPORT_ID: fieldBuilder.buildEdmTypeField(
          'ChannelReportId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link posPermissionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_PERMISSION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PosPermissionGroupId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailChannelReportPermissionGroups)
      };
    }

    return this._schema;
  }
}
