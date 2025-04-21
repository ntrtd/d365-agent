/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RegisterProfits } from './RegisterProfits';
import { RegisterProfitsRequestBuilder } from './RegisterProfitsRequestBuilder';
import { RTax25AssetProductionType } from './RTax25AssetProductionType';
import { NoYes } from './NoYes';
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
export class RegisterProfitsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RegisterProfits<DeSerializersT>, DeSerializersT>
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
  ): RegisterProfitsApi<DeSerializersT> {
    return new RegisterProfitsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RegisterProfits;

  requestBuilder(): RegisterProfitsRequestBuilder<DeSerializersT> {
    return new RegisterProfitsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RegisterProfits<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RegisterProfits<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RegisterProfits<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RegisterProfits, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RegisterProfits,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RegisterProfits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGISTER_ID: OrderableEdmTypeField<
      RegisterProfits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPENSE_CODE: OrderableEdmTypeField<
      RegisterProfits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCTION_ASSET: EnumField<
      RegisterProfits<DeSerializers>,
      DeSerializersT,
      RTax25AssetProductionType,
      true,
      true
    >;
    PAYMENT_CONDITION: OrderableEdmTypeField<
      RegisterProfits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION: EnumField<
      RegisterProfits<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RegisterProfits<DeSerializers>>;
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
         * Static representation of the {@link registerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_ID: fieldBuilder.buildEdmTypeField(
          'RegisterId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link expenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_CODE: fieldBuilder.buildEdmTypeField(
          'ExpenseCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productionAsset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ASSET: fieldBuilder.buildEnumField(
          'ProductionAsset',
          RTax25AssetProductionType,
          true
        ),
        /**
         * Static representation of the {@link paymentCondition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CONDITION: fieldBuilder.buildEdmTypeField(
          'PaymentCondition',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link condition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION: fieldBuilder.buildEnumField('Condition', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RegisterProfits)
      };
    }

    return this._schema;
  }
}
