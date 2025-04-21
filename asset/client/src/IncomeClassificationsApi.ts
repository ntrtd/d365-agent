/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IncomeClassifications } from './IncomeClassifications';
import { IncomeClassificationsRequestBuilder } from './IncomeClassificationsRequestBuilder';
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
export class IncomeClassificationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<IncomeClassifications<DeSerializersT>, DeSerializersT>
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
  ): IncomeClassificationsApi<DeSerializersT> {
    return new IncomeClassificationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = IncomeClassifications;

  requestBuilder(): IncomeClassificationsRequestBuilder<DeSerializersT> {
    return new IncomeClassificationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IncomeClassifications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<IncomeClassifications<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IncomeClassifications<DeSerializersT>,
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
    typeof IncomeClassifications,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IncomeClassifications,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE_ID: OrderableEdmTypeField<
      IncomeClassifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      IncomeClassifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_THIRTEENTH_SALARY: EnumField<
      IncomeClassifications<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<IncomeClassifications<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link codeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE_ID: fieldBuilder.buildEdmTypeField('CodeId', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isThirteenthSalary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_THIRTEENTH_SALARY: fieldBuilder.buildEnumField(
          'IsThirteenthSalary',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IncomeClassifications)
      };
    }

    return this._schema;
  }
}
