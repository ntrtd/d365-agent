/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorLandedCostTypeGroups } from './VendorLandedCostTypeGroups';
import { VendorLandedCostTypeGroupsRequestBuilder } from './VendorLandedCostTypeGroupsRequestBuilder';
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
export class VendorLandedCostTypeGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendorLandedCostTypeGroups<DeSerializersT>, DeSerializersT>
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
  ): VendorLandedCostTypeGroupsApi<DeSerializersT> {
    return new VendorLandedCostTypeGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendorLandedCostTypeGroups;

  requestBuilder(): VendorLandedCostTypeGroupsRequestBuilder<DeSerializersT> {
    return new VendorLandedCostTypeGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorLandedCostTypeGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorLandedCostTypeGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorLandedCostTypeGroups<DeSerializersT>,
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
    typeof VendorLandedCostTypeGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorLandedCostTypeGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorLandedCostTypeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      VendorLandedCostTypeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_DESCRIPTION: OrderableEdmTypeField<
      VendorLandedCostTypeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendorLandedCostTypeGroups<DeSerializers>>;
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
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link groupDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'GroupDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorLandedCostTypeGroups)
      };
    }

    return this._schema;
  }
}
