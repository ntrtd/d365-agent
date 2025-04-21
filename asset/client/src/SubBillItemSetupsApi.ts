/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillItemSetups } from './SubBillItemSetups';
import { SubBillItemSetupsRequestBuilder } from './SubBillItemSetupsRequestBuilder';
import { InventPostingItemCode } from './InventPostingItemCode';
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
export class SubBillItemSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SubBillItemSetups<DeSerializersT>, DeSerializersT>
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
  ): SubBillItemSetupsApi<DeSerializersT> {
    return new SubBillItemSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillItemSetups;

  requestBuilder(): SubBillItemSetupsRequestBuilder<DeSerializersT> {
    return new SubBillItemSetupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillItemSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SubBillItemSetups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SubBillItemSetups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof SubBillItemSetups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillItemSetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillItemSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_CODE: EnumField<
      SubBillItemSetups<DeSerializers>,
      DeSerializersT,
      InventPostingItemCode,
      true,
      true
    >;
    ITEM_RELATION: OrderableEdmTypeField<
      SubBillItemSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MILESTONE_TEMPLATE: OrderableEdmTypeField<
      SubBillItemSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPORT_ITEM: OrderableEdmTypeField<
      SubBillItemSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RENEWAL_ITEM: OrderableEdmTypeField<
      SubBillItemSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubBillItemSetups<DeSerializers>>;
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
         * Static representation of the {@link itemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CODE: fieldBuilder.buildEnumField(
          'ItemCode',
          InventPostingItemCode,
          true
        ),
        /**
         * Static representation of the {@link itemRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_RELATION: fieldBuilder.buildEdmTypeField(
          'ItemRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link milestoneTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILESTONE_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'MilestoneTemplate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supportItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORT_ITEM: fieldBuilder.buildEdmTypeField(
          'SupportItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link renewalItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENEWAL_ITEM: fieldBuilder.buildEdmTypeField(
          'RenewalItem',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillItemSetups)
      };
    }

    return this._schema;
  }
}
