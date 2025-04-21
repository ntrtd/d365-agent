/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceWorkOrderLineChecklistHeaders } from './AssetMaintenanceWorkOrderLineChecklistHeaders';
import { AssetMaintenanceWorkOrderLineChecklistHeadersRequestBuilder } from './AssetMaintenanceWorkOrderLineChecklistHeadersRequestBuilder';
import { EntAssetChecklistLineStatus } from './EntAssetChecklistLineStatus';
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
export class AssetMaintenanceWorkOrderLineChecklistHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceWorkOrderLineChecklistHeaders<DeSerializersT>,
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
  ): AssetMaintenanceWorkOrderLineChecklistHeadersApi<DeSerializersT> {
    return new AssetMaintenanceWorkOrderLineChecklistHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetMaintenanceWorkOrderLineChecklistHeaders;

  requestBuilder(): AssetMaintenanceWorkOrderLineChecklistHeadersRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceWorkOrderLineChecklistHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceWorkOrderLineChecklistHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceWorkOrderLineChecklistHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceWorkOrderLineChecklistHeaders<DeSerializersT>,
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
    typeof AssetMaintenanceWorkOrderLineChecklistHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceWorkOrderLineChecklistHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklistHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_ID: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklistHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORK_ORDER_LINE_NUMBER: OrderableEdmTypeField<
      AssetMaintenanceWorkOrderLineChecklistHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    STATUS: EnumField<
      AssetMaintenanceWorkOrderLineChecklistHeaders<DeSerializers>,
      DeSerializersT,
      EntAssetChecklistLineStatus,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceWorkOrderLineChecklistHeaders<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'WorkOrderId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workOrderLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkOrderLineNumber',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          EntAssetChecklistLineStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetMaintenanceWorkOrderLineChecklistHeaders
        )
      };
    }

    return this._schema;
  }
}
