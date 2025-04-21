/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CfopMatrixEntities } from './CfopMatrixEntities';
import { CfopMatrixEntitiesRequestBuilder } from './CfopMatrixEntitiesRequestBuilder';
import { SalesPurchTrntypeBr } from './SalesPurchTrntypeBr';
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
export class CfopMatrixEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CfopMatrixEntities<DeSerializersT>, DeSerializersT>
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
  ): CfopMatrixEntitiesApi<DeSerializersT> {
    return new CfopMatrixEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CfopMatrixEntities;

  requestBuilder(): CfopMatrixEntitiesRequestBuilder<DeSerializersT> {
    return new CfopMatrixEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CfopMatrixEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CfopMatrixEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CfopMatrixEntities<DeSerializersT>,
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
    typeof CfopMatrixEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CfopMatrixEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CfopMatrixEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CFOP_CODE: OrderableEdmTypeField<
      CfopMatrixEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      CfopMatrixEntities<DeSerializers>,
      DeSerializersT,
      SalesPurchTrntypeBr,
      true,
      true
    >;
    OPERATION_TYPE: OrderableEdmTypeField<
      CfopMatrixEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CFOP_GROUP: OrderableEdmTypeField<
      CfopMatrixEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CfopMatrixEntities<DeSerializers>>;
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
         * Static representation of the {@link cfopCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFOP_CODE: fieldBuilder.buildEdmTypeField(
          'CFOPCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          SalesPurchTrntypeBr,
          true
        ),
        /**
         * Static representation of the {@link operationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_TYPE: fieldBuilder.buildEdmTypeField(
          'OperationType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cfopGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFOP_GROUP: fieldBuilder.buildEdmTypeField(
          'CFOPGroup',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CfopMatrixEntities)
      };
    }

    return this._schema;
  }
}
