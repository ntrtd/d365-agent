/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReleasedEngineeringProductVersionAttributes } from './ReleasedEngineeringProductVersionAttributes';
import { ReleasedEngineeringProductVersionAttributesRequestBuilder } from './ReleasedEngineeringProductVersionAttributesRequestBuilder';
import { ProductAttributesApi } from './ProductAttributesApi';
import { NoYes } from './NoYes';
import { PdsBatchAttribToleranceAction } from './PdsBatchAttribToleranceAction';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ReleasedEngineeringProductVersionAttributesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ReleasedEngineeringProductVersionAttributes<DeSerializersT>,
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
  ): ReleasedEngineeringProductVersionAttributesApi<DeSerializersT> {
    return new ReleasedEngineeringProductVersionAttributesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ATTRIBUTE: OneToOneLink<
      ReleasedEngineeringProductVersionAttributes<DeSerializersT>,
      DeSerializersT,
      ProductAttributesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductAttributesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_ATTRIBUTE: new OneToOneLink(
        'ProductAttribute',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ReleasedEngineeringProductVersionAttributes;

  requestBuilder(): ReleasedEngineeringProductVersionAttributesRequestBuilder<DeSerializersT> {
    return new ReleasedEngineeringProductVersionAttributesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ReleasedEngineeringProductVersionAttributes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReleasedEngineeringProductVersionAttributes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReleasedEngineeringProductVersionAttributes<DeSerializersT>,
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
    typeof ReleasedEngineeringProductVersionAttributes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReleasedEngineeringProductVersionAttributes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReleasedEngineeringProductVersionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_PRODUCT_NUMBER: OrderableEdmTypeField<
      ReleasedEngineeringProductVersionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ReleasedEngineeringProductVersionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_PRODUCT_ATTRIBUTE_NAME: OrderableEdmTypeField<
      ReleasedEngineeringProductVersionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_PRODUCT_ATTRIBUTE_TYPE_NAME: OrderableEdmTypeField<
      ReleasedEngineeringProductVersionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAXIMUM_DECIMAL_TOLERANCE: OrderableEdmTypeField<
      ReleasedEngineeringProductVersionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DECIMAL_TOLERANCE_INCREMENT: OrderableEdmTypeField<
      ReleasedEngineeringProductVersionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTEGER_TOLERANCE_INCREMENT: OrderableEdmTypeField<
      ReleasedEngineeringProductVersionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_INHERITED_ATTRIBUTE: EnumField<
      ReleasedEngineeringProductVersionAttributes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_INTEGER_TOLERANCE: OrderableEdmTypeField<
      ReleasedEngineeringProductVersionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_SYNCHRONIZED_WITH_BATCH_ATTRIBUTE: EnumField<
      ReleasedEngineeringProductVersionAttributes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TOLERANCE_FAILING_ACTION: EnumField<
      ReleasedEngineeringProductVersionAttributes<DeSerializers>,
      DeSerializersT,
      PdsBatchAttribToleranceAction,
      true,
      true
    >;
    MINIMUM_INTEGER_TOLERANCE: OrderableEdmTypeField<
      ReleasedEngineeringProductVersionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MINIMUM_DECIMAL_TOLERANCE: OrderableEdmTypeField<
      ReleasedEngineeringProductVersionAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_ATTRIBUTE_MANDATORY: EnumField<
      ReleasedEngineeringProductVersionAttributes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_INHERITING_ATTRIBUTE: EnumField<
      ReleasedEngineeringProductVersionAttributes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_ATTRIBUTE: OneToOneLink<
      ReleasedEngineeringProductVersionAttributes<DeSerializersT>,
      DeSerializersT,
      ProductAttributesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      ReleasedEngineeringProductVersionAttributes<DeSerializers>
    >;
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
         * Static representation of the {@link engineeringProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngineeringProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringProductVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'EngineeringProductVersionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringProductAttributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_PRODUCT_ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'EngineeringProductAttributeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringProductAttributeTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_PRODUCT_ATTRIBUTE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'EngineeringProductAttributeTypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maximumDecimalTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_DECIMAL_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'MaximumDecimalTolerance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link decimalToleranceIncrement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECIMAL_TOLERANCE_INCREMENT: fieldBuilder.buildEdmTypeField(
          'DecimalToleranceIncrement',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link integerToleranceIncrement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGER_TOLERANCE_INCREMENT: fieldBuilder.buildEdmTypeField(
          'IntegerToleranceIncrement',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isInheritedAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INHERITED_ATTRIBUTE: fieldBuilder.buildEnumField(
          'IsInheritedAttribute',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maximumIntegerTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_INTEGER_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'MaximumIntegerTolerance',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isSynchronizedWithBatchAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SYNCHRONIZED_WITH_BATCH_ATTRIBUTE: fieldBuilder.buildEnumField(
          'IsSynchronizedWithBatchAttribute',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link toleranceFailingAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOLERANCE_FAILING_ACTION: fieldBuilder.buildEnumField(
          'ToleranceFailingAction',
          PdsBatchAttribToleranceAction,
          true
        ),
        /**
         * Static representation of the {@link minimumIntegerTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_INTEGER_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'MinimumIntegerTolerance',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link minimumDecimalTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_DECIMAL_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'MinimumDecimalTolerance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isAttributeMandatory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ATTRIBUTE_MANDATORY: fieldBuilder.buildEnumField(
          'IsAttributeMandatory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isInheritingAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INHERITING_ATTRIBUTE: fieldBuilder.buildEnumField(
          'IsInheritingAttribute',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          ReleasedEngineeringProductVersionAttributes
        )
      };
    }

    return this._schema;
  }
}
