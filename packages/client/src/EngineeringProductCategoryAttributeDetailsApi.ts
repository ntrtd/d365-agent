/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringProductCategoryAttributeDetails } from './EngineeringProductCategoryAttributeDetails';
import { EngineeringProductCategoryAttributeDetailsRequestBuilder } from './EngineeringProductCategoryAttributeDetailsRequestBuilder';
import { EngineeringProductCategoryAttributeDetailsValuesApi } from './EngineeringProductCategoryAttributeDetailsValuesApi';
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
export class EngineeringProductCategoryAttributeDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringProductCategoryAttributeDetails<DeSerializersT>,
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
  ): EngineeringProductCategoryAttributeDetailsApi<DeSerializersT> {
    return new EngineeringProductCategoryAttributeDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringProductCategoryAttributeDetailsValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_CATEGORY_ATTRIBUTE_DETAILS_VALUE: OneToOneLink<
      EngineeringProductCategoryAttributeDetails<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryAttributeDetailsValuesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringProductCategoryAttributeDetailsValuesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_PRODUCT_CATEGORY_ATTRIBUTE_DETAILS_VALUE: new OneToOneLink(
        'EngineeringProductCategoryAttributeDetailsValue',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = EngineeringProductCategoryAttributeDetails;

  requestBuilder(): EngineeringProductCategoryAttributeDetailsRequestBuilder<DeSerializersT> {
    return new EngineeringProductCategoryAttributeDetailsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringProductCategoryAttributeDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringProductCategoryAttributeDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringProductCategoryAttributeDetails<DeSerializersT>,
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
    typeof EngineeringProductCategoryAttributeDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringProductCategoryAttributeDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENGINEERING_PRODUCT_CATEGORY_NAME: OrderableEdmTypeField<
      EngineeringProductCategoryAttributeDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_PRODUCT_ATTRIBUTE_TYPE_NAME: OrderableEdmTypeField<
      EngineeringProductCategoryAttributeDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_PRODUCT_ATTRIBUTE_NAME: OrderableEdmTypeField<
      EngineeringProductCategoryAttributeDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_INHERITING_ATTRIBUTE: EnumField<
      EngineeringProductCategoryAttributeDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_MANDATORY_ATTRIBUTE: EnumField<
      EngineeringProductCategoryAttributeDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SYNCHRONISED_WITH_BATCH_ATTRIBUTE: EnumField<
      EngineeringProductCategoryAttributeDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTEGER_TOLERANCE_INCREMENT: OrderableEdmTypeField<
      EngineeringProductCategoryAttributeDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_INTEGER_TOLERANCE: OrderableEdmTypeField<
      EngineeringProductCategoryAttributeDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_INTEGER_TOLERANCE: OrderableEdmTypeField<
      EngineeringProductCategoryAttributeDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOLERANCE_FAILING_ACTION: EnumField<
      EngineeringProductCategoryAttributeDetails<DeSerializers>,
      DeSerializersT,
      PdsBatchAttribToleranceAction,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringProductCategoryAttributeDetailsValue} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_CATEGORY_ATTRIBUTE_DETAILS_VALUE: OneToOneLink<
      EngineeringProductCategoryAttributeDetails<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryAttributeDetailsValuesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringProductCategoryAttributeDetails<DeSerializers>
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
         * Static representation of the {@link engineeringProductAttributeTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_PRODUCT_ATTRIBUTE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'EngineeringProductAttributeTypeName',
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
         * Static representation of the {@link isInheritingAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INHERITING_ATTRIBUTE: fieldBuilder.buildEnumField(
          'IsInheritingAttribute',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isMandatoryAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MANDATORY_ATTRIBUTE: fieldBuilder.buildEnumField(
          'IsMandatoryAttribute',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isSynchronisedWithBatchAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SYNCHRONISED_WITH_BATCH_ATTRIBUTE: fieldBuilder.buildEnumField(
          'IsSynchronisedWithBatchAttribute',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link integerToleranceIncrement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEGER_TOLERANCE_INCREMENT: fieldBuilder.buildEdmTypeField(
          'IntegerToleranceIncrement',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumIntegerTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_INTEGER_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'MaximumIntegerTolerance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minimumIntegerTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_INTEGER_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'MinimumIntegerTolerance',
          'Edm.Decimal',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          EngineeringProductCategoryAttributeDetails
        )
      };
    }

    return this._schema;
  }
}
