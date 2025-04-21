/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdParameters } from './WithholdParameters';
import { WithholdParametersRequestBuilder } from './WithholdParametersRequestBuilder';
import { TaxWithholdCheckWhtGroups } from './TaxWithholdCheckWhtGroups';
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
export class WithholdParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WithholdParameters<DeSerializersT>, DeSerializersT>
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
  ): WithholdParametersApi<DeSerializersT> {
    return new WithholdParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WithholdParameters;

  requestBuilder(): WithholdParametersRequestBuilder<DeSerializersT> {
    return new WithholdParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WithholdParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WithholdParameters<DeSerializersT>,
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
    typeof WithholdParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WithholdParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KEY: OrderableEdmTypeField<
      WithholdParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CHECK_INTERSECTION: EnumField<
      WithholdParameters<DeSerializers>,
      DeSerializersT,
      TaxWithholdCheckWhtGroups,
      true,
      true
    >;
    ENABLE_CALC_WHT_IN_INVOICE: EnumField<
      WithholdParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<WithholdParameters<DeSerializers>>;
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
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link checkIntersection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_INTERSECTION: fieldBuilder.buildEnumField(
          'CheckIntersection',
          TaxWithholdCheckWhtGroups,
          true
        ),
        /**
         * Static representation of the {@link enableCalcWhtInInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_CALC_WHT_IN_INVOICE: fieldBuilder.buildEnumField(
          'EnableCalcWHTInInvoice',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdParameters)
      };
    }

    return this._schema;
  }
}
