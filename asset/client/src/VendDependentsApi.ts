/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendDependents } from './VendDependents';
import { VendDependentsRequestBuilder } from './VendDependentsRequestBuilder';
import { RelationshipTypeBr } from './RelationshipTypeBr';
import { DeductionTypePersonBr } from './DeductionTypePersonBr';
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
export class VendDependentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendDependents<DeSerializersT>, DeSerializersT>
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
  ): VendDependentsApi<DeSerializersT> {
    return new VendDependentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendDependents;

  requestBuilder(): VendDependentsRequestBuilder<DeSerializersT> {
    return new VendDependentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendDependents<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendDependents<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<VendDependents<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof VendDependents, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(VendDependents, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendDependents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELATIONSHIP_TYPE: EnumField<
      VendDependents<DeSerializers>,
      DeSerializersT,
      RelationshipTypeBr,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      VendDependents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      VendDependents<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CPF_NUM: OrderableEdmTypeField<
      VendDependents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_TABLE_ACCOUNT_NUM: OrderableEdmTypeField<
      VendDependents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEDUCTION_TYPE: EnumField<
      VendDependents<DeSerializers>,
      DeSerializersT,
      DeductionTypePersonBr,
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendDependents<DeSerializers>>;
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
         * Static representation of the {@link relationshipType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIONSHIP_TYPE: fieldBuilder.buildEnumField(
          'RelationshipType',
          RelationshipTypeBr,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link cpfNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPF_NUM: fieldBuilder.buildEdmTypeField('CPFNum', 'Edm.String', true),
        /**
         * Static representation of the {@link vendTableAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_TABLE_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'VendTable_AccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deductionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_TYPE: fieldBuilder.buildEnumField(
          'DeductionType',
          DeductionTypePersonBr,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendDependents)
      };
    }

    return this._schema;
  }
}
