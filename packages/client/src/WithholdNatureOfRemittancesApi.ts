/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdNatureOfRemittances } from './WithholdNatureOfRemittances';
import { WithholdNatureOfRemittancesRequestBuilder } from './WithholdNatureOfRemittancesRequestBuilder';
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
export class WithholdNatureOfRemittancesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WithholdNatureOfRemittances<DeSerializersT>, DeSerializersT>
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
  ): WithholdNatureOfRemittancesApi<DeSerializersT> {
    return new WithholdNatureOfRemittancesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WithholdNatureOfRemittances;

  requestBuilder(): WithholdNatureOfRemittancesRequestBuilder<DeSerializersT> {
    return new WithholdNatureOfRemittancesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdNatureOfRemittances<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WithholdNatureOfRemittances<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WithholdNatureOfRemittances<DeSerializersT>,
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
    typeof WithholdNatureOfRemittances,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdNatureOfRemittances,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WithholdNatureOfRemittances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REMITTANCE_CATEGORY_CODE: OrderableEdmTypeField<
      WithholdNatureOfRemittances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REMITTANCE_DETAILS: OrderableEdmTypeField<
      WithholdNatureOfRemittances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WithholdNatureOfRemittances<DeSerializers>>;
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
         * Static representation of the {@link remittanceCategoryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_CATEGORY_CODE: fieldBuilder.buildEdmTypeField(
          'RemittanceCategoryCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link remittanceDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMITTANCE_DETAILS: fieldBuilder.buildEdmTypeField(
          'RemittanceDetails',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdNatureOfRemittances)
      };
    }

    return this._schema;
  }
}
