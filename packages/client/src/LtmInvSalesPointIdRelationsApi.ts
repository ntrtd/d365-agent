/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmInvSalesPointIdRelations } from './LtmInvSalesPointIdRelations';
import { LtmInvSalesPointIdRelationsRequestBuilder } from './LtmInvSalesPointIdRelationsRequestBuilder';
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
export class LtmInvSalesPointIdRelationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LtmInvSalesPointIdRelations<DeSerializersT>, DeSerializersT>
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
  ): LtmInvSalesPointIdRelationsApi<DeSerializersT> {
    return new LtmInvSalesPointIdRelationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmInvSalesPointIdRelations;

  requestBuilder(): LtmInvSalesPointIdRelationsRequestBuilder<DeSerializersT> {
    return new LtmInvSalesPointIdRelationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LtmInvSalesPointIdRelations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LtmInvSalesPointIdRelations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmInvSalesPointIdRelations<DeSerializersT>,
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
    typeof LtmInvSalesPointIdRelations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmInvSalesPointIdRelations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmInvSalesPointIdRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PS_SALES_POINT_ID: OrderableEdmTypeField<
      LtmInvSalesPointIdRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INV_SALES_POINT_ID: OrderableEdmTypeField<
      LtmInvSalesPointIdRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LtmInvSalesPointIdRelations<DeSerializers>>;
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
         * Static representation of the {@link psSalesPointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PS_SALES_POINT_ID: fieldBuilder.buildEdmTypeField(
          'PSSalesPointId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invSalesPointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INV_SALES_POINT_ID: fieldBuilder.buildEdmTypeField(
          'InvSalesPointId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmInvSalesPointIdRelations)
      };
    }

    return this._schema;
  }
}
