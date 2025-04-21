/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventorySiteGates } from './InventorySiteGates';
import { InventorySiteGatesRequestBuilder } from './InventorySiteGatesRequestBuilder';
import { InventSiteGateTypeIn } from './InventSiteGateTypeIn';
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
export class InventorySiteGatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InventorySiteGates<DeSerializersT>, DeSerializersT>
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
  ): InventorySiteGatesApi<DeSerializersT> {
    return new InventorySiteGatesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventorySiteGates;

  requestBuilder(): InventorySiteGatesRequestBuilder<DeSerializersT> {
    return new InventorySiteGatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventorySiteGates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InventorySiteGates<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventorySiteGates<DeSerializersT>,
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
    typeof InventorySiteGates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventorySiteGates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventorySiteGates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GATE_TYPE: EnumField<
      InventorySiteGates<DeSerializers>,
      DeSerializersT,
      InventSiteGateTypeIn,
      true,
      true
    >;
    GATE_ID: OrderableEdmTypeField<
      InventorySiteGates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SITE_ID: OrderableEdmTypeField<
      InventorySiteGates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      InventorySiteGates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<InventorySiteGates<DeSerializers>>;
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
         * Static representation of the {@link gateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GATE_TYPE: fieldBuilder.buildEnumField(
          'GateType',
          InventSiteGateTypeIn,
          true
        ),
        /**
         * Static representation of the {@link gateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GATE_ID: fieldBuilder.buildEdmTypeField('GateId', 'Edm.String', false),
        /**
         * Static representation of the {@link siteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_ID: fieldBuilder.buildEdmTypeField('SiteId', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventorySiteGates)
      };
    }

    return this._schema;
  }
}
