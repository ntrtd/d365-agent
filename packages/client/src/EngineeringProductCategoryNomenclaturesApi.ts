/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringProductCategoryNomenclatures } from './EngineeringProductCategoryNomenclatures';
import { EngineeringProductCategoryNomenclaturesRequestBuilder } from './EngineeringProductCategoryNomenclaturesRequestBuilder';
import { EcoResNomenclatureRole } from './EcoResNomenclatureRole';
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
export class EngineeringProductCategoryNomenclaturesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringProductCategoryNomenclatures<DeSerializersT>,
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
  ): EngineeringProductCategoryNomenclaturesApi<DeSerializersT> {
    return new EngineeringProductCategoryNomenclaturesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EngineeringProductCategoryNomenclatures;

  requestBuilder(): EngineeringProductCategoryNomenclaturesRequestBuilder<DeSerializersT> {
    return new EngineeringProductCategoryNomenclaturesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringProductCategoryNomenclatures<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringProductCategoryNomenclatures<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringProductCategoryNomenclatures<DeSerializersT>,
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
    typeof EngineeringProductCategoryNomenclatures,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringProductCategoryNomenclatures,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENGINEERING_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      EngineeringProductCategoryNomenclatures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NOMENCLATURE_ROLE: EnumField<
      EngineeringProductCategoryNomenclatures<DeSerializers>,
      DeSerializersT,
      EcoResNomenclatureRole,
      true,
      true
    >;
    IS_NOMENCLATURE_ACTIVE: EnumField<
      EngineeringProductCategoryNomenclatures<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      EngineeringProductCategoryNomenclatures<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link engineeringProductCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_PRODUCT_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'EngineeringProductCategoryName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link nomenclatureRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOMENCLATURE_ROLE: fieldBuilder.buildEnumField(
          'NomenclatureRole',
          EcoResNomenclatureRole,
          true
        ),
        /**
         * Static representation of the {@link isNomenclatureActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NOMENCLATURE_ACTIVE: fieldBuilder.buildEnumField(
          'IsNomenclatureActive',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringProductCategoryNomenclatures)
      };
    }

    return this._schema;
  }
}
