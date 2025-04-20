/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostGroups } from './CostGroups';
import { CostGroupsRequestBuilder } from './CostGroupsRequestBuilder';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { NoYes } from './NoYes';
import { CostGroupBehavior } from './CostGroupBehavior';
import { CostGroupType } from './CostGroupType';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CostGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CostGroups<DeSerializersT>, DeSerializersT>
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
  ): CostGroupsApi<DeSerializersT> {
    return new CostGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      CostGroups<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ReleasedProductsV2Api<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CostGroups;

  requestBuilder(): CostGroupsRequestBuilder<DeSerializersT> {
    return new CostGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CostGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CostGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CostGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CostGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CostGroups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CostGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      CostGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_DEFAULT_COST_GROUP: EnumField<
      CostGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COST_BEHAVIOUR: EnumField<
      CostGroups<DeSerializers>,
      DeSerializersT,
      CostGroupBehavior,
      true,
      true
    >;
    GROUP_NAME: OrderableEdmTypeField<
      CostGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_GROUP_TYPE: EnumField<
      CostGroups<DeSerializers>,
      DeSerializersT,
      CostGroupType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      CostGroups<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CostGroups<DeSerializers>>;
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
         * Static representation of the {@link isDefaultCostGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_COST_GROUP: fieldBuilder.buildEnumField(
          'IsDefaultCostGroup',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link costBehaviour} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_BEHAVIOUR: fieldBuilder.buildEnumField(
          'CostBehaviour',
          CostGroupBehavior,
          true
        ),
        /**
         * Static representation of the {@link groupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'GroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costGroupType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_GROUP_TYPE: fieldBuilder.buildEnumField(
          'CostGroupType',
          CostGroupType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CostGroups)
      };
    }

    return this._schema;
  }
}
